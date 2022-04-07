export const MakeArticleParagraph = (longText) => {
    longText.map((text) => {
        text.body = text.body
            .replace(/\r\n/g, "<br />")
            .replace(/[\r\n]/g, "<br />");
    });
    return longText;
};
