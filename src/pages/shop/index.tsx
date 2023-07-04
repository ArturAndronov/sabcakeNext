import React, {useState} from 'react'
import {NextPage} from "next";
import Nav from "@/components/common/Nav";
import Footer from "@/components/common/Footer";
import {Translations} from "@/pages";


const Shop:NextPage = () =>{
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedLanguage(event.target.value);
    };

    const translations: Translations = {
        en: {
            titleHeader: 'A Sweet Bite',
            descriptionHeader: 'Take it all in a single bite. Import the full demo content with a\n' +
                '                            single mouse click using the one-click import feature.',
            buttonHeader: 'Take a bite',
            titleAboutMe: 'About Me',
            descriptionAboutMe: 'My name is Sabina and I am a home pastry chef! Sweets have always been present\n' +
                '                                in my life and have been an integral part of it, looking back now,\n' +
                '                                I understand that cooking various dishes has always attracted and fascinated me,\n' +
                '                                with the birth of my son, the craving for making delicious ,\n' +
                '                                natural and homemade food has become even stronger,\n' +
                '                                my son has become my incentive to realize himself as a pastry chef, every New month of\n' +
                '                                his life\n' +
                '                                I was celebrating with a new cake and it was a small step on the way to a big dream.\n' +
                '                                With each new cake, my skills increased, and the desire to master new techniques and\n' +
                '                                processes grew,\n' +
                '                                the birth of my daughter only increased this interest, and moving to a new country\n' +
                '                                became one of the most\n' +
                '                                important stages for me in a new place, everything sparkled with new colors, new friends\n' +
                '                                and acquaintances appeared,\n' +
                '                                who inspired new achievements and pushed me to a new step- and so, step by step ,\n' +
                '                                I became who I am now, a home- made pastry chef with a great love for his work and big\n' +
                '                                dreams and plans for the future .',
            titleChooseFlavor: 'Choose Your Flavor',
            descriptionChooseFlavor: 'Here you can independently assemble your ideal dessert that fully meets your preferences and\n' +
                '                        desires.',
            button: 'Order now',
            titleCakePops: 'Cake Pops',
            descriptionCakePops: 'Delicate biscuit with juicy filling, covered with Belgian chocolate with any decor of your\n' +
                '                        choice.',
            titleOurMenu: 'Our menu',
            descriptionOurMenu: ' A variety of flavors and delicious desserts are waiting for you in our menu! We proudly\n' +
                '                                offer a wide selection of fresh and delicious cupcakes, cakes and other gourmet sweets\n' +
                '                                that are sure to win your heart and provide the most sophisticated taste experience.',
            OurMenuSnikersTitle: '"Snikers"',
            OurMenuSkinkersDescription: 'Сhocolate-nut filling that immerses you in a magical world. A blend of smooth peanut butter cream, sweet caramel and crunchy nuts strikes an unbeatable balance between softness and texture, bursting in your mouth with absolute bliss.',
            OurMenuMeringueTitle: 'Meringue cake',
            OurMenuMeringueDescription: 'Meringue roll starts with a thin layer of fluffy and tender meringue, baked until golden brown. Its lightness and fragility create the perfect base for this dessert, giving it an elegant look. Then a luxurious layer of cream is applied to the meringue, which adds a rich and unique taste to the dessert.',
            OurMenuHoneyTitle: '"Honey"',
            OurMenuHoneyDescription: '"Honey cake" is a true work of art, combining delicate honey gingerbread and\n' +
                '                                        airy buttercream. Each layer of this cake is soaked in fragrant honey and\n' +
                '                                        creates the perfect combination of spiciness and sweetness.',
            OurMenuCupcakeTitle: 'Cupcake',
            OurMenuCupcakeDescription: 'Сupcakes are little pieces of joy that will win your heart with their flavors, textures and attractive appearance.',
            home: "Home",
            gallery: "Gallery",
            shop: "Shop",
            portfolio: "Portfolio",
        },
        ru: {
            titleHeader: 'Сладкий кусочек',
            descriptionHeader: 'Съешьте все это за один раз. Импортируйте полный демонстрационный контент одним щелчком мыши, используя функцию импорта в один клик.',
            buttonHeader: 'Откуси кусочек',
            titleAboutMe: 'Обо мне',
            descriptionAboutMe: 'Меня зовут Сабина и я домашний кондитер! Сладости всегда присутствовали в моей жизни и были неотъемлемой ее частью, оглядываясь сейчас назад, я понимаю , что приготовление различных блюд всегда меня манило и завораживало , с рождением сыночка тяга к изготовлению вкусной , натуральной и домашней еды стала ещё сильней. Сыночек стал моим стимулом для реализации себя в роли кондитера,каждый Новый месяц его жизни я отмечала новым тортиком и это был маленький шажочек на пути к большой мечте С каждым новым тортом мои навыки увеличивались , а желание овладевать новыми техниками и процессами росло рождение доченьки только усилило этот интерес, а переезд в новую страну стал для меня одним из самых важных этапов на новом месте все заиграло новыми красками , появились новые друзья, знакомые , которые вдохновили на новые свершения и подтолкнули к новому шажочку- обучению так шаг за шагом я становилась тем, кем я есть сейчас , домашним кондитером с огромной любовью к своему делу и большими мечтами и планами на будущее',
            titleChooseFlavor: 'Выберите cвой вкус',
            descriptionChooseFlavor: 'Здесь вы можете самостоятельно собрать свой идеальный десерт, который полностью соответствует вашим предпочтениям и желаниям.',
            button: 'Заказать сейчас',
            titleCakePops: 'Пирожное на палочке',
            descriptionCakePops: 'Нежный бисквит с сочной начинкой, покрытый бельгийским шоколадом, с любым декором на ваш выбор.',
            titleOurMenu: 'Наше меню',
            descriptionOurMenu: 'Разнообразие вкусов и восхитительные десерты ждут вас в нашем меню! Мы с гордостью предлагаем широкий выбор свежих и вкусных кексов, пирожных и других изысканных сладостей, которые обязательно покорят ваше сердце и подарят самые изысканные вкусовые ощущения.',
            OurMenuSnikersTitle: '"Сникерс"',
            OurMenuSkinkersDescription: 'Шоколадно-ореховая начинка, которая погружает вас в волшебный мир. Смесь нежного крема с арахисовым маслом, сладкой карамели и хрустящих орехов создает непревзойденный баланс между мягкостью и текстурой, наполняя ваш рот абсолютным блаженством.',
            OurMenuMeringueTitle: 'Меренговый торт',
            OurMenuMeringueDescription: 'Рулет из меренги начинается с тонкого слоя пышной и нежной меренги, выпекаемой до золотисто-коричневого цвета. Его легкость и хрупкость создают идеальную основу для этого десерта, придавая ему элегантный вид. Затем на безе наносится роскошный слой крема, который придает десерту насыщенный и неповторимый вкус.',
            OurMenuHoneyTitle: '"Медовик"',
            OurMenuHoneyDescription: '""Медовый пирог" - это настоящее произведение искусства, сочетающее в себе нежные медовые пряники и воздушный сливочный крем. Каждый слой этого торта пропитан ароматным медом и создает идеальное сочетание пряности и сладости.',
            OurMenuCupcakeTitle: "Кексы",
            OurMenuCupcakeDescription: 'Кексы - это маленькие кусочки радости, которые покорят ваше сердце своим вкусом, текстурой и привлекательным внешним видом.',
            home: "Главная",
            gallery: "Галерея",
            shop: "Магазин",
            portfolio: "Портфолио",
        },
    };

    return (
        <>
            <Nav
                selectedLanguage={selectedLanguage}
                handleLanguageChange={handleLanguageChange}
                translations={translations}
            />
            {/* Add your shop content here */}
            <Footer />
        </>
    );
};
export default Shop;