export const MakeArticleParagraph = (longText) => {
    longText.map((text) => {
        text.body = text.body
            .replace(/\r\n/g, "<br />")
            .replace(/[\r\n]/g, "<br />");
    });
    return longText;
};

export const MakeArticleParagraph2 = (text) => {
    console.log(text.toString());
    console.log(text.includes("/"));
    console.log(text.replace(/\\/g, ""));
    return text;
};

export const adjustNewLines = (text) => {
    return text.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />");
};
