export default class QuoteService {
  QUOTES_API = 'https://quotes.rest/qod';

  async getQuote() {
    let response = await (await fetch(this.QUOTES_API, {
      mode: "cors"
    })).json();
    return {
      quote: response.contents.quotes[0].quote,
      author: response.contents.quotes[0].author
    };
  }
}
