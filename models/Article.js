//TODO
//Each of the 4 article sections will contain a main article photo, date, author name, and short description followed by a “read more” button

export class Article {
    constructor(
        id,
        title,
        image,
        date,
        author,
        category,
        description,
        link,
        text,
        additionalImages
    ) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.date = date;
        this.author = author;
        this.category = category;
        this.description = description;
        this.link = link;
        this.text = text;
        this.additionalImages = additionalImages;
    }
}
