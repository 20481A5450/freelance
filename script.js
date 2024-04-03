
(() => {
    //If you want to add more images, add the link name and URL image URL in the array list below.
    const images_list = [
        {
            "url": "./Assets/Carousel1.jpeg",
            "alt": "",
            "name": "image 1",
            "link": ""
        },
        {
            "url": "https://www.html-code-generator.com/images/slider/2.png",
            "alt": "",
            "name": "image 2",
            "link": ""
        },
        {
            "url": "https://www.html-code-generator.com/images/slider/3.png",
            "alt": "",
            "name": "image 3",
            "link": ""
        },
        {
            "url": "https://www.html-code-generator.com/images/slider/4.png",
            "alt": "",
            "name": "image 4",
            "link": ""
        },
        {
            "url": "https://www.html-code-generator.com/images/slider/5.png",
            "alt": "",
            "name": "image 5",
            "link": ""
        }
    ];

    let slider_id = document.querySelector("#hcg-slider-1");

    
    let dots_div = "";
    let images_div = "";
    for (let i = 0; i < images_list.length; i++) {
        // if no link without href="" tag
        let href = (images_list[i].link == "" ? "" : ' href="' + images_list[i].link + '"');
        images_div += '<a' + href + ' class="hcg-slides animated"' + (i === 0 ? ' style="display:flex"' : '') + '>' +
            '<span class="hcg-slide-number">' + (i + 1) + '/' + images_list.length + '</span>' +
            '<img src="' + images_list[i].url + '" alt="' + images_list[i].name + '">' +
            // '<span class="hcg-slide-text">'+images_list[i].name+'</span>'+
            '</a>';
        dots_div += '<a href="#" class="hcg-slide-dot' + (i === 0 ? ' dot-active' : '') + '" data-id="' + i + '"></a>';
    }
    slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
    slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

    let slide_index = 0;

    const images = slider_id.querySelectorAll(".hcg-slides");
    const dots = slider_id.querySelectorAll(".hcg-slide-dot");
    const prev_button = slider_id.querySelector("#hcg-slide-prev");
    const next_button = slider_id.querySelector("#hcg-slide-next");

    const showSlides = () => {
        if (slide_index > images.length - 1) {
            slide_index = 0;
        }
        if (slide_index < 0) {
            slide_index = images.length - 1;
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
            dots[i].classList.remove("dot-active");
            if (i == slide_index) {
                images[i].style.display = "flex";
                dots[i].classList.add("dot-active");
            }
        }
    }

    prev_button.addEventListener("click", event => {
        event.preventDefault();
        slide_index--;
        showSlides();
    }, false);

    next_button.addEventListener("click", event => {
        event.preventDefault();
        slide_index++;
        showSlides();
    }, false);

    const dot_click = event => {
        event.preventDefault();
        slide_index = event.target.dataset.id;
        showSlides();
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", dot_click, false);
    }
})();
