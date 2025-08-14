declare module 'country-currency-emoji-flags' {
  interface CurrencyFlag {
    country: string;
    code: string;
    currency: string;
    symbol: string;
    emoji: string;
  }
  const data: CurrencyFlag[];
  export default data;
}
