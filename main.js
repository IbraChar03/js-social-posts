const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
let arrayid = []
let container=document.getElementById("container")
posts.forEach(element => {
    let count=element.likes;
    let post = document.createElement("div");
    post.classList.add("post");
    container.append(post)

    let header = document.createElement("div");
    header.classList.add("post__header");
    post.append(header);

    let meta = document.createElement("div");
    meta.classList.add("post-meta");
    header.append(meta);

    let metaIcon = document.createElement("div");
    metaIcon.classList.add("post-meta__icon");
    meta.append(metaIcon);

    let imgIcon = document.createElement("img");
    imgIcon.classList.add("profile-pic");
    imgIcon.src = element.author.image;
    if(element.author.image == null){
        imgIcon=document.createElement("p")
        imgIcon.classList.add("name")
        imgIcon.classList.add("profile-pic");
        let string = element.author.name;
        var names = string.split(/\s+/);
        names[0] = names[0].substr(0, 1);
        names[1] = names[1].substr(0, 1);
        var name_abbr = names.join(' ');
        console.log(name_abbr)
        
        imgIcon.innerHTML=name_abbr
    }
    metaIcon.append(imgIcon);

    let metaData = document.createElement("div");
    metaData.classList.add("post-meta__data");
    meta.append(metaData);

    let metaAuthor = document.createElement("div");
    metaAuthor.classList.add("post-meta__author");
    metaAuthor.innerHTML = element.author.name;
    metaData.append(metaAuthor);

    let metaTime = document.createElement("div");
    metaTime.classList.add("post-meta__time");
    metaTime.innerHTML = element.created;
    metaData.append(metaTime);

    let text = document.createElement("div");
    text.classList.add("post__text");
    text.innerHTML = element.content;
    post.append(text);

    let postImage = document.createElement("div");
    postImage.classList.add("post__image");
    post.append(postImage);
    let img = document.createElement("img");
    img.src = element.media;
    postImage.append(img);

    let footer = document.createElement("div");
    footer.classList.add("post__footer");
    post.append(footer);

    let like = document.createElement("div");
    like.classList.add("likes");
    like.classList.add("js-likes");
    footer.append(like);

    let cta = document.createElement("div");
    cta.classList.add("likes__cta");
    like.append(cta);

    let button = document.createElement("a");
    button.classList.add("like-button");
    button.classList.add("js-like-button");
    button.setAttribute("data-postid",element.id);
    cta.append(button);

    let iconButton = document.createElement("i");
    iconButton.classList.add("like-button__icon");
    iconButton.classList.add("fas");
    iconButton.classList.add("fa-thumbs-up");
    iconButton.setAttribute("aria-hidden",true);
    button.append(iconButton);

    let span = document.createElement("span");
    span.classList.add("like-button__label");
    span.innerHTML = "Mi Piace";
    iconButton.append(span);

    span.addEventListener("click",
    function(){
      count++;
      counter.innerHTML = `Piace a ${count} persone`
      button.style.color = "blue";

     if(count++){
         arrayid.push(element.id)
       }
     
     console.log(arrayid);

    }, {once : true}
    
    );
   
     let counter = document.createElement("div");
     counter.classList.add("likes__counter");
      counter.innerHTML = `Piace a ${element.likes} persone`
     like.append(counter);

    let b = document.createElement("b");
    b.setAttribute("id","like-counter-1");
    b.classList.add("js-likes-counter");

    
});


