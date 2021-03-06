import img1 from '../../images/svg-1.svg' 
import img2 from '../../images/svg-2.svg'
import img3 from '../../images/svg-3.svg'
import img4 from '../../images/svg-4.svg'
import img5 from '../../images/svg-5.svg'
import img6 from '../../images/svg-6.svg'
import {SliderData} from '../ImageSlider/SliderData'


export const homeObjOne = {
    id:'about',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine: 'continuous improvement',
    headLine: "Striving for excellence",
    description: "I was born in Tlaxcala, Mexico. I'm passionate about coding, math and science.",
    buttonLabel: 'Contact me!',
    imgStart: false,
    img: img3,
    alt: 'Car',
    dark:true,
    primary:true,
    darkText:false,
    desc2: "This website shows the progress that I have made in the past months as I continue growing, in order to achieve my dream: becoming a software engineer."
};

export const homeObjTwo = {
    id:'discover',
    lightBg: true,
    lightText:false,
    lightTextDesc: false,
    topLine: 'Do you want to stay in touch?',
    headLine: "Let's connect!",
    description: "Send me a 'Hello', an 'Hola', or a '你好' ",
    buttonLabel: 'Contact me!',
    imgStart: true,
    img: img2,
    alt: 'piggy',
    dark:false,
    primary:false,
    darkText:true
};

export const homeObjThree = {
    id:'awards',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine: 'Premium developer',
    headLine: 'Unlimited code for you',
    description: 'Get access to my personal projects',
    buttonLabel: 'Contact me!',
    imgStart: false,
    dark:true,
    primary:true,
    darkText:false,
    slides: SliderData
};