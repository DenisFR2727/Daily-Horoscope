import aquarius from "../icons/aquarius.svg";
import pisces from "../icons/pisces.svg";
import aries from "../icons/aries.svg";
import taurus from "../icons/taurus.svg";
import gemini from "../icons/gemini.svg";
import cancer from "../icons/cancer.svg";
import leo from "../icons/leo.svg";
import virgo from "../icons/virgo.svg";
import libra from "../icons/libra.svg";
import scorpio from "../icons/scorpio.svg";
import sagittarius from "../icons/sagittarius.svg";
import capricorn from "../icons/capricorn.svg";

const Horoscope = [
    {
        id:1,
        name: 'Aquarius', 
        date:'January 20 - February 18',
        title: 'You may be in one of those moods when you feel you have to possess each and every beautiful thing you spot in shop windows, but the stars warn you must hold on to your cash, because you will need it for more important purchases later on.',
        image: aquarius,
    },
    {
        id:2,
        name: 'Pisces', 
        date: 'February 19 - March 20',
        title: 'Challenges may be coming thick and fast at the moment but because you feel so powerful you actually enjoy being put to the test. Your composure and self-confidence have not gone unnoticed by people in positions of power, who will reward you accordingly.',
        image: pisces,
    },
    {
        id:3,
        name: 'Aries', 
        date: 'March 21 - April 19',
        title: 'Something you have been trying to keep secret will become public knowledge today and it may be an uncomfortable situation for you. However, you are who you are, you do what you do and there is no reason on earth why you should want to deny it.',
        image: aries,  
    },
    {
        id:4,
        name: 'Taurus', 
        date: 'April 20 - May 20',
        title: 'If you call on your powers of persuasion today you will find it ridiculously easy to get others to do what you ask of them. You will achieve more though if you deal with people on a one-to-one level – trying to persuade groups won’t be so easy.',
        image: taurus,
    },
    {
        id:5,
        name: 'Gemini', 
        date: 'May 21 - June 20',
        title: 'Your schedule may be hugely demanding but because you can see what the long-term rewards could be you are prepared to do whatever it takes to push on and get it all done. Take a break every couple of hours though to refresh your mind and body.',
        image: gemini,    
    },
    {
        id:6,
        name: 'Cancer', 
        date: 'June 21 - July 22',
        title: 'Are all things possible for you now? Well, maybe not all but there are so many opportunities heading your way that your only real problem is going to be how to choose between them. Listen to your inner voice and follow its advice to the letter.',
        image: cancer,   
    },
    {
        id:7,
        name: 'Leo', 
        date: 'July 23 - August 22',
        title:'If a money matter is causing you concern then do something about it. As one of the zodiac’s Fire signs you are not the sort to just sit there and wait for life to happen, so identify the problem, roll up your sleeves and get stuck in!',
        image: leo,   
    },
    {
        id:8,
        name: 'Virgo', 
        date: 'August 23 - September 22',
        title:'You may be inclined to give someone you don’t much like a wide berth today but the planets suggest a better tactic would be to approach them and get talking. Chances are you are not as far apart ethically and emotionally as you had previously believed.',
        image: virgo,
    },
    {
        id:9,
        name: 'Libra', 
        date: 'September 23 - October 22',
        title:'The next few days are going to be extremely busy and if you want to avoid burnout you need to get on top of your To Do list right away. The more of the grunt work you do now the less you will be under the cosh later on.',
        image: libra,   
    },
    {
        id:10,
        name: 'Scorpio', 
        date: 'October 23 - November 21',
        title:'Some of your plans will wander off track a bit over the next 24 hours, so be ready to guide them back in the right direction. The more focused you are the less likely it is you will end up miles away from your chosen destination.',
        image: scorpio,   
    },
    {
        id:11,
        name: 'Sagittarius', 
        date: 'November 22 - December 21',
        title:'You need to find ways to rise above petty disputes and let those around you know that long silences and secret grudges are not the way forward. If you think it might help, swallow your pride and be the first to say sorry. It’s a minor sacrifice.',
        image: sagittarius,   
    },
    {
        id:12,
        name: 'Capricorn', 
        date: 'December 22 - January 19',
        title:'You can, if you wish, use your superior knowledge and your way with words to get others to do your bidding but a better approach might be to ask them what they want to do. It could be that their aims and your aims are not so far apart.',
        image: capricorn,   
    },
]
export default Horoscope;