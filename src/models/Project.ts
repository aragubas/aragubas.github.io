import { TitleLink } from "./TitleLink"

export enum LanguageLabel {
    CPlusPlus = "c++",
    CSharp = "c#",
    Typescript = "ts",
    CSS = "css",
    Python = "python",
    Rust = "rust"
}

export class Project {
    title: string
    description: string
    languages: Array<LanguageLabel>
    links: Array<TitleLink>

    constructor(title: string, description: string, languages: Array<LanguageLabel>, links: Array<TitleLink>) {
        this.title = title;
        this.description = description;
        this.languages = languages;
        this.links = links;
    }
}