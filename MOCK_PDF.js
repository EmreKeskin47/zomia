const desc1 = `During the Syrian civil war, towns and cities across the country overthrew the central government and governed themselves. Ultimately, however, this experiment in self-rule collapsed: some cities fell under the sway of Islamic fundamentalists, others of the Kurdish-backed forces, and others still were recaptured by the regime of Bashar al-Assad. Most of these self-governing cities were riven by feuds, factionalism, and bitter conflicts over resources. One the few exceptions is the town of Mare’a, a small municipality in the northern Aleppo countryside, which remained a degree of autonomy and cohesion throughout the war–and managed to become one of the most influential cities in the entire war. How did the revolutionaries of Mare’a escape the fate of other Syrian rebels? Why was the city politics so cohesive? In this report, Jeremy Hodge and Hussein Nasser delve into the history of this much discussed, but poorly understood, revolutionary town. At the heart of this story is how factors like inequality and the rural-urban divide, which have largely been ignored in most commentary on the Syrian war–played a key role in shaping the trajectory of the uprising. `;
const desc2 = `The Syrian conflict began in 2011 as a mass uprising, with protesters gathering in one small town after the next to demand the end of a 40-year dictatorship. It quickly morphed into a complex, multi-sided war. By 2014, the conflict was simultaneously a revolution, a civil war, and a proxy war involving nearly a dozen countries. Why were the Syrian rebels so fractured? What role did outside powers–the Gulf States, Turkey, and the United States–play in this? This report, by Anand Gopal and Jeremy Hodge, in partnership with New America, explores how local social networks and socioeconomic class influenced the origins and trajectory of Syria’s proxy war. In Syria, social networks and class played a key role in determining which segments of the rebellion were more susceptible to forming transnational linkages, and when those linkages allowed foreign patrons to wield effective control over their proxies.`;
const desc3 = `Very little is known about Mullah Omar, the notorious supreme leader of the Taliban. Only a handful of photographs are believed to exist, and his biographical details have long been contested. Upon the fall of the Taliban government in 2001, he effectively vanished, becoming, after Osama bin Laden, one of the most wanted men in the world. The U.S. placed a ten million-dollar bounty on his head, but was unable to find him. In this exclusive, Bette Dam exposes the secret history of a Mullah Omar from that disappearance until his death — covered up by the Taliban — in 2013. For five years, with remarkable courage and tenacity, Dam traveled to insurgent-controlled Afghanistan, meeting with Omar's close associates, friends and relatives and interviewing dozens of Taliban leaders. She also interviewed dozens of Afghan and U.S. officials — who began to tell a very different story in private than they had in public. And, in December 2018, Dam gained unprecedented access to Mullah Omar's bodyguard — who, for twelve years, lived with the Taliban leader, and was one of his only conduits to the outside world. Dam is the first journalist to interview him. The story that emerges is astonishing,  contradicting over a decade of analysis by the U.S. intelligence community, and almost everyone else. After 2001, Mullah Omar did indeed vanish — but he vanished to a safe house just two miles from a major U.S. Forward Operating Base, housing thousands of soldiers. Dam's seminal work not only sets the history straight — it suggests a staggering U.S. intelligence failure.`;

import { Report } from "./models/Report";
export const mockReports = [
    new Report(
        "1",
        "Proxy War in the Northern Corridor",
        "/reports/1.png",
        "date",
        "Jeremy Hodge & Hussein Nasser",
        "category",
        desc1,
        "1.pdf",
        ["/reports/1-2.png", "/reports/1-3.png"]
    ),
    new Report(
        "2",
        "Social Networks, Class, and the Syrian Proxy War",
        "/reports/2.png",
        "April 2021",
        "Anand Gopal & Jeremy Hodge",
        "category",
        desc2,
        "2.pdf",
        []
    ),
    new Report(
        "3",
        "The Secret Life of Mullah Omar",
        "/reports/3.png",
        "date",
        "BETTE DAM",
        "category",
        desc3,
        "3.pdf",
        ["/reports/3-1.png", "/reports/3-2.png", "/reports/3-3.png"]
    ),
];
