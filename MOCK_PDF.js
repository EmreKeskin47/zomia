const desc1 = `DThe tiny town of Mare’a was one of the first Syrian cities to declare itself liberated in 2011. Within months, it became one of the nerve centers coordinating rebels across the country. This report details the history of Mare’a and those factors that fueled its rise to prominence.`;
const desc2 = `Since 2012, Syria’s rebel movement has been split between Saudi and Qatari backed groups. Much of patron-client relations was driven by class, as both countries targeted aid to specific socio-economic cohorts with whom they possessed historical ties.`;
const desc3 = `After 2001, the Taliban’s supreme leader Mullah Omar vanished, evading capture until his death in 2013 by living in a safe house two miles from a US Forward Operating base. Bette Dam exposes this major intelligence failure during America’s longest running war.`;


import { Report } from "./models/Report";
export const mockReports = [
    new Report(
        "1",
        "Proxy War in the Northern Corridor: The Case of Mare’a",
        "/reports/1.png",
        "1 May 2022",
        "Jeremy Hodge & Hussein Nasser",
        "category",
        desc1,
        desc1,
        "Hussein Nasser",
        "/1.pdf",
        ["/reports/1-2.png", "/reports/1-3.png"],
    ),
    new Report(
        "2",
        "Social Networks, Class, and the Syrian Proxy War",
        "/reports/2.png",
        "1 April 2021",
        "Anand Gopal & Jeremy Hodge",
        "category",
        desc2,
        desc2,
        "Tomas Davidov/Shutterstock.com",
        "/2.pdf",
        []
    ),
    new Report(
        "3",
        "The Secret Life of Mullah Omar",
        "/reports/5.png",
        "10 March 2019",
        "Bette Dam",
        "category",
        desc3,
        desc3,
        "Amber Clay/Pixabay.com",
        "/3.pdf",
        ["/reports/3-1.png", "/reports/3-2.png", "/reports/3-3.png"]
    ),
];
