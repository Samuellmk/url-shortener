export class UrlInterface {
  showCopiedText: (show: boolean) => void;
}

export class ShortUrlInterface extends UrlInterface {
  shortUrl: string;
}

export class NormalUrlInterface {
  url: string;
}
