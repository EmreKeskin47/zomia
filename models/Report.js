/// Each of the 3 report sections will contain a main photo, date, author name, and short description followed by a “read more” button.

export class Report {
    constructor(
        id,
        title,
        image,
        date,
        author,
        category,
        text,
        description,
        photoAttribution,
        pdfLink,
        additionalImages
    ) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.date = date;
        this.author = author;
        this.category = category;
        this.text = text;
        this.description = description;
        this.photoAttribution = photoAttribution;
        this.pdfLink = pdfLink;
        this.additionalImages = additionalImages;
    }
}
