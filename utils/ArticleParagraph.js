export const MakeArticleParagraph = (longText) => {
    longText.map((text) => {
        text.body = text.body
            .replace(/\r\n/g, "<br />")
            .replace(/[\r\n]/g, "<br />");
    });
    return longText;
};

export const MakeArticleParagraph2 = (text) => {
    return text.replace(/\\n/g, "<br/>");
};

export const adjustNewLines = (text) => {
    return text.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />");
};
