const articles = [
    {
        "description": "L'exploration spatiale a toujours fasciné l'humanité. Alors que les missions lunaires et martiennes ont fait naître des rêves d'aventure interplanétaire...",
        "url": "articles/voyage-entre-la-terre-et-la-planete-b2seomds",
        "src": "/img/earthsurface.jpg",
        "alt": "earthsurface",
        "title": "Voyage entre la Terre et la planète b2seomds",
        "title2": "",
        "tags": ["Exploration spatiale"],
    },
    {
        "description": "b2seomds est une planète qui suscite un grand intérêt parmi les scientifiques et chercheurs. Découverte récemment, elle présente des caractéristiques...",
        "url": "articles/b2seomds-une-nouvelle-perspective",
        "src": "/img/exoplanet.jpg",
        "alt": "exoplanet",
        "title": "b2seomds, une nouvelle perspective",
        "title2": "",
        "tags": ["Enjeux et perspectives"],
    },
    {
        "description": "Depuis sa découverte, la planète b2seomds fascine par sa diversité biologique et ses ressources naturelles abondantes. Située à des milliers d'années-lumière de...",
        "url": "articles/b2seomds-un-ecosysteme-richissime",
        "src": "/img/Foret_luxuriante_sur_la_planete_B2SEOMDS_avec_des_arbres_geants_et_un_ciel_vibrant.jpg",
        "alt": "Forêt luxuriante planète b2seomds",
        "title": "b2seomds, un écosystème richissime",
        "title2": "",
        "tags": ["Vie sur b2seomds"],
    },
    {
        "description": "Atteindre b2seomds, située à des années-lumière de notre système solaire, représente l'un des plus grands défis de l'humanité. Ce voyage titanesque n'a été rendu possible que grâce à...",
        "url": "articles/les-technologies-derriere-le-voyage-vers-b2seomds",
        "src": "/img/Les_defis_technologiques_et_logistiques.jpg",
        "alt": "Les defis technologiques et logistiques de la planète b2seomds",
        "title": "Les technologies derrière le voyage vers b2seomds",
        "title2": "",
        "tags": ["Technologies et innovations"],
    },
    {
        "description": "L'exploration spatiale nous pousse à nous interroger sur l'habitabilité des planètes au-delà de la Terre. Parmi elles, b2seomds, avec ses particularités fascinantes, est une...",
        "url": "articles/peut-on-respirer-sur-b2seomds",
        "src": "/img/Schema_illustrant_la_composition_de_latmosphere_de_B2SEOMDS.jpg",
        "alt": "Schema illustrant la composition de l'atmosphere de la planète b2seomds",
        "title": "Peut-on respirer sur b2seomds ?",
        "title2": "",
        "tags": ["Exploration spatiale"],
    },
    {
        "description": "b2seomds ne se limite pas à une simple curiosité interstellaire. Avec ses caractéristiques uniques et son écosystème mystérieux, cette planète ouvre une voie passionnante pour la science. Les chercheurs du monde entier considèrent b2seomds comme une opportunité d’avancer dans de nombreux domaines scientifiques, de la biologie à l’astrophysique...",
        "url": "articles/les-opportunites-scientifiques-de-b2seomds",
        "src": "/img/article6.jpg",
        "alt": "Schema illustrant la composition de l'atmosphere de la planète b2seomds",
        "title": "Les opportunités scientifiques de b2seomds",
        "title2": "",
        "tags": ["Science-fiction et culture"],
    },
    {
        "description": "Atteindre une planète comme b2seomds, située à des années-lumière de la Terre, nécessite une révolution technologique. Les moteurs spatiaux traditionnels ne suffisent plus...",
        "url": "articles/les-moteurs-du-futur-pour-atteindre-b2seomds",
        "src": "/img/article7.jpg",
        "alt": "Illustration d’un moteur ionique avancé pour l’exploration spatiale",
        "title": "Les moteurs du futur pour atteindre b2seomds",
        "title2": "",
        "tags": ["Exploration spatiale"],
    },
    
]

const articles_actu = [
    {
        "description": "L'exploration spatiale a toujours fasciné l'humanité. Alors que les missions lunaires et martiennes ont fait naître des rêves d'aventure interplanétaire...",
        "url": "articles/voyage-entre-la-terre-et-la-planete-b2seomds",
        "src": "/img/earthsurface.jpg",
        "alt": "earthsurface",
        "title": "Voyage entre la Terre et la planète b2seomds",
        "title2": "",
        "tags": ["Exploration spatiale"],
    },
    {
        "description": "b2seomds est une planète qui suscite un grand intérêt parmi les scientifiques et chercheurs. Découverte récemment, elle présente des caractéristiques...",
        "url": "articles/b2seomds-une-nouvelle-perspective",
        "src": "/img/exoplanet.jpg",
        "alt": "exoplanet",
        "title": "b2seomds, une nouvelle perspective",
        "title2": "",
        "tags": ["Enjeux et perspectives"],
    },
    {
        "description": "Depuis sa découverte, la planète b2seomds fascine par sa diversité biologique et ses ressources naturelles abondantes. Située à des milliers d'années-lumière de...",
        "url": "",
        "src": "/img/Foret_luxuriante_sur_la_planete_B2SEOMDS_avec_des_arbres_geants_et_un_ciel_vibrant.jpg",
        "alt": "Forêt luxuriante planète b2seomds",
        "title": "b2seomds, un écosystème richissime",
        "title2": "",
        "tags": ["Vie sur b2seomds"],
    },
]

document.addEventListener("DOMContentLoaded", () => {

    const filter_cards = document.getElementById("filter_cards");
    const filter_cards_actu = document.getElementById("filter_cards_actu");
    const tags_input = document.querySelectorAll(".input_filter_tags");
    const all_input = document.getElementById("input_filter_all");
    let checked = new Set();

    if (filter_cards) {
        create_cards(articles, filter_cards);
    } else if (filter_cards_actu) {
        create_cards(articles_actu, filter_cards_actu);
    }

    function create_cards(articles, filter_cards) {
        articles.forEach(article => {
            let cards = document.createElement("li");
            cards.className = "cards";

            let link = document.createElement("a");
            link.href = article.url;
            cards.appendChild(link);

            let img_cards = document.createElement("img");
            img_cards.src = article.src;
            img_cards.alt = article.alt;
            if (article.forme === "portrait") {
                img_cards.style.aspectRatio = "9/16";
                img_cards.style.objectFit = "contain";
                img_cards.style.height = "300px";
            }
            if (article.forme === "paysage") {
                img_cards.style.objectFit = "fill";
            }
            link.appendChild(img_cards);

            let infos_cards = document.createElement("div");
            infos_cards.className = "infos_cards";
            link.appendChild(infos_cards);

            let content = document.createElement("div");
            content.className = "content";
            infos_cards.appendChild(content);

            let title_cards = document.createElement("h2");
            title_cards.textContent = article.title;
            content.appendChild(title_cards);

            let title2_cards = document.createElement("h4");
            title2_cards.textContent = article.title2;
            title2_cards.style.marginBottom = 0;
            content.appendChild(title2_cards);

            let desc_cards = document.createElement("p");
            desc_cards.textContent = article.description;
            content.appendChild(desc_cards);

            let infos_tags = document.createElement("div");
            infos_tags.className = "infos_tags";
            infos_cards.appendChild(infos_tags);

            article.tags.forEach(tag => {
                let tag_cards = document.createElement("p");
                tag_cards.textContent = tag;
                tag_cards.className = "tags_cards";
                tag_cards.style.padding = "10px";
                tag_cards.style.borderRadius = "5px";

                switch (tag) {
                    case "Exploration spatiale":
                        tag_cards.style.backgroundColor = "purple";
                        tag_cards.style.color = "white";
                        break;
                    case "Vie sur b2seomds":
                        tag_cards.style.backgroundColor = "green";
                        tag_cards.style.color = "white";
                        break;
                    case "Enjeux et perspectives":
                        tag_cards.style.backgroundColor = "#f0e10e";
                        tag_cards.style.color = "black";
                        break;
                    case "Technologies et innovations":
                        tag_cards.style.backgroundColor = "#294dc1";
                        tag_cards.style.color = "white";
                        break;
                    case "Science-fiction et culture":
                        tag_cards.style.backgroundColor = "black";
                        tag_cards.style.color = "white";
                        break;
                }

                infos_tags.appendChild(tag_cards);
            });

            filter_cards.appendChild(cards)
        });
        set_input();
    };

    if (all_input) {
        all_input.addEventListener("click", () => {
            document.querySelectorAll(".cards").forEach(card => {
                card.style.display = "block";
            });
            tags_input.forEach(tag_input => {
                let custom_button = tag_input.closest(".custom-button");
                custom_button.classList.remove("inactive_input");
                tag_input.checked = true
                checked.add(tag_input.value)
            });
        });
    }

    function set_input() {
        tags_input.forEach(tag_input => {
            tag_input.checked = true
            checked.add(tag_input.value)

            tag_input.addEventListener("change", () => {
                let custom_button = tag_input.closest(".custom-button");

                if (tag_input.checked) {
                    custom_button.classList.remove("inactive_input");
                    checked.add(tag_input.value);
                } else {
                    custom_button.classList.add("inactive_input");
                    checked.delete(tag_input.value);
                }
                console.log(checked);
                check_tags();
            });
        });
    };

    function check_tags() {

        document.querySelectorAll(".cards").forEach(card => {
            let tags_of_card = Array.from(card.querySelectorAll(".tags_cards")).map(tag => tag.textContent);
            let shouldDisplay = tags_of_card.every(tag => checked.has(tag));

            if (shouldDisplay) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

});