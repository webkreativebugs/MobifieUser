import { YouConfigType } from "../../../enum/YouConfig.enum";
import { MdEdit, MdLocalShipping } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

export const WebViewNavigationURL = [
  {
    key: 'about_us',
    title: 'About Us',
    // navigateTo: NavigationConstant.WEBVIEW_SCREEN,
    url: 'https://quitiz.com/pages/about-us',
    navigationData: {},
  },
  {
    key: 'faq_page',
    title: 'FAQ Page',
    // navigateTo: NavigationConstant.WEBVIEW_SCREEN,
    url: 'https://quitiz.com/pages/faqs',
    navigationData: {},
  },
  {
    key: 'terms_and_conditions',
    title: 'Terms and Conditions',
    // navigateTo: NavigationConstant.WEBVIEW_SCREEN,
    url: 'https://quitiz.com/pages/terms-conditions',
    navigationData: {},
  },
  {
    key: 'privacy_policy',
    title: 'Privacy Policy',
    // navigateTo: NavigationConstant.WEBVIEW_SCREEN,
    url: 'https://quitiz.com/pages/privacy-policy',
    navigationData: {},
  },
   {
    key: 'returns_policy',
    title: 'Returns Policy',
    // navigateTo: NavigationConstant.WEBVIEW_SCREEN,
    url: 'https://quitiz.com/pages/return-and-refund-policy',
    navigationData: {},
  },
 {
    key: 'contact_us',
    title: 'Contact Us',
    // navigateTo: NavigationConstant.WEBVIEW_SCREEN,
    url: 'https://quitiz.com/pages/contact-2',
    navigationData: {},
  },
]

export const defaultConfiguration = {
  currentCode: 'INR',
  symbol: '₹',
};



export const ApiConfigRequest=[
    {
    key: "headers",
    title: "Headers",
    type: "textarea",
    placeholder: {"Content-Type": "application/json"},
    required: false,
  },
  {
    key: "query_params",
    title: "Query Parameters",
    type: "textarea",
    placeholder: {"param1": "value1", "param2": "value2"},
    required: false,
  },
   {
    key: "timeout",
    title: "Timeout (ms)",
    type: "number",
    placeholder: "5000",
    required: false,
  },
 
]
 

export const ApiConfigAuth = [
  {
    key: "api_key",
    title: "API Key",
    type: "text",
    placeholder: "Enter your API key",
    required: true,
  },
  {
    key: "base_url",
    title: "Base URL",
    type: "url",
    placeholder: "https://api.example.com",
    required: true,
  },
  {
    key: "endpoint",
    title: "Endpoint",
    type: "text",
    placeholder: "/v1/data",
    required: true,
  },
  {
    key: "method",
    title: "HTTP Method",
    type: "select",
    options: ["GET", "POST", "PUT", "DELETE"],
    required: true,
  },

 
];


export const currencies = [
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "USD", name: "United States Dollar", symbol: "$" },
  { code: "AED", name: "United Arab Emirates Dirham", symbol: "د.إ" },
  { code: "AFN", name: "Afghan Afghani", symbol: "؋" },
  { code: "ALL", name: "Albanian Lek", symbol: "L" },
  { code: "AMD", name: "Armenian Dram", symbol: "֏" },
  { code: "ANG", name: "Netherlands Antillean Guilder", symbol: "ƒ" },
  { code: "AOA", name: "Angolan Kwanza", symbol: "Kz" },
  { code: "ARS", name: "Argentine Peso", symbol: "$" },
  { code: "AUD", name: "Australian Dollar", symbol: "$" },
  { code: "AWG", name: "Aruban Florin", symbol: "ƒ" },
  { code: "AZN", name: "Azerbaijani Manat", symbol: "₼" },
  { code: "BAM", name: "Bosnia-Herzegovina Convertible Marka", symbol: "KM" },
  { code: "BBD", name: "Barbadian Dollar", symbol: "$" },
  { code: "BDT", name: "Bangladeshi Taka", symbol: "৳" },
  { code: "BGN", name: "Bulgarian Lev", symbol: "лв" },
  { code: "BHD", name: "Bahraini Dinar", symbol: ".د.ب" },
  { code: "BIF", name: "Burundian Franc", symbol: "FBu" },
  { code: "BMD", name: "Bermudian Dollar", symbol: "$" },
  { code: "BND", name: "Brunei Dollar", symbol: "$" },
  { code: "BOB", name: "Bolivian Boliviano", symbol: "Bs." },
  { code: "BRL", name: "Brazilian Real", symbol: "R$" },
  { code: "BSD", name: "Bahamian Dollar", symbol: "$" },
  { code: "BTN", name: "Bhutanese Ngultrum", symbol: "Nu." },
  { code: "BWP", name: "Botswana Pula", symbol: "P" },
  { code: "BYN", name: "Belarusian Ruble", symbol: "Br" },
  { code: "BZD", name: "Belize Dollar", symbol: "$" },
  { code: "CAD", name: "Canadian Dollar", symbol: "$" },
  { code: "CDF", name: "Congolese Franc", symbol: "FC" },
  { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
  { code: "CLP", name: "Chilean Peso", symbol: "$" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
  { code: "COP", name: "Colombian Peso", symbol: "$" },
  { code: "CRC", name: "Costa Rican Colón", symbol: "₡" },
  { code: "CUP", name: "Cuban Peso", symbol: "₱" },
  { code: "CVE", name: "Cape Verdean Escudo", symbol: "$" },
  { code: "CZK", name: "Czech Koruna", symbol: "Kč" },
  { code: "DJF", name: "Djiboutian Franc", symbol: "Fdj" },
  { code: "DKK", name: "Danish Krone", symbol: "kr" },
  { code: "DOP", name: "Dominican Peso", symbol: "RD$" },
  { code: "DZD", name: "Algerian Dinar", symbol: "دج" },
  { code: "EGP", name: "Egyptian Pound", symbol: "£" },
  { code: "ERN", name: "Eritrean Nakfa", symbol: "Nfk" },
  { code: "ETB", name: "Ethiopian Birr", symbol: "Br" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "FJD", name: "Fijian Dollar", symbol: "$" },
  { code: "FKP", name: "Falkland Islands Pound", symbol: "£" },
  { code: "FOK", name: "Faroese Króna", symbol: "kr" },
  { code: "GBP", name: "British Pound Sterling", symbol: "£" },
  { code: "GEL", name: "Georgian Lari", symbol: "₾" },
  { code: "GGP", name: "Guernsey Pound", symbol: "£" },
  { code: "GHS", name: "Ghanaian Cedi", symbol: "₵" },
  { code: "GIP", name: "Gibraltar Pound", symbol: "£" },
  { code: "GMD", name: "Gambian Dalasi", symbol: "D" },
  { code: "GNF", name: "Guinean Franc", symbol: "FG" },
  { code: "GTQ", name: "Guatemalan Quetzal", symbol: "Q" },
  { code: "GYD", name: "Guyanese Dollar", symbol: "$" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "$" },
  { code: "HNL", name: "Honduran Lempira", symbol: "L" },
  { code: "HRK", name: "Croatian Kuna", symbol: "kn" },
  { code: "HTG", name: "Haitian Gourde", symbol: "G" },
  { code: "HUF", name: "Hungarian Forint", symbol: "Ft" },
  { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp" },
  { code: "ILS", name: "Israeli New Shekel", symbol: "₪" },
  { code: "IMP", name: "Isle of Man Pound", symbol: "£" },
  { code: "IQD", name: "Iraqi Dinar", symbol: "ع.د" },
  { code: "IRR", name: "Iranian Rial", symbol: "﷼" },
  { code: "ISK", name: "Icelandic Króna", symbol: "kr" },
  { code: "JEP", name: "Jersey Pound", symbol: "£" },
  { code: "JMD", name: "Jamaican Dollar", symbol: "$" },
  { code: "JOD", name: "Jordanian Dinar", symbol: "د.ا" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "KES", name: "Kenyan Shilling", symbol: "Sh" },
  { code: "KGS", name: "Kyrgyzstani Som", symbol: "с" },
  { code: "KHR", name: "Cambodian Riel", symbol: "៛" },
  { code: "KID", name: "Kiribati Dollar", symbol: "$" },
  { code: "KMF", name: "Comorian Franc", symbol: "CF" },
  { code: "KRW", name: "South Korean Won", symbol: "₩" },
  { code: "KWD", name: "Kuwaiti Dinar", symbol: "د.ك" },
  { code: "KYD", name: "Cayman Islands Dollar", symbol: "$" },
  { code: "KZT", name: "Kazakhstani Tenge", symbol: "₸" },
  { code: "LAK", name: "Lao Kip", symbol: "₭" },
  { code: "LBP", name: "Lebanese Pound", symbol: "ل.ل" },
  { code: "LKR", name: "Sri Lankan Rupee", symbol: "Rs" },
  { code: "LRD", name: "Liberian Dollar", symbol: "$" },
  { code: "LSL", name: "Lesotho Loti", symbol: "L" },
  { code: "LYD", name: "Libyan Dinar", symbol: "ل.د" },
  { code: "MAD", name: "Moroccan Dirham", symbol: "د.م." },
  { code: "MDL", name: "Moldovan Leu", symbol: "L" },
  { code: "MGA", name: "Malagasy Ariary", symbol: "Ar" },
  { code: "MKD", name: "Macedonian Denar", symbol: "ден" },
  { code: "MMK", name: "Myanma Kyat", symbol: "Ks" },
  { code: "MNT", name: "Mongolian Tugrik", symbol: "₮" },
  { code: "MOP", name: "Macanese Pataca", symbol: "P" },
  { code: "MRU", name: "Mauritanian Ouguiya", symbol: "UM" },
  { code: "MUR", name: "Mauritian Rupee", symbol: "₨" },
  { code: "MVR", name: "Maldivian Rufiyaa", symbol: "Rf" },
  { code: "MWK", name: "Malawian Kwacha", symbol: "MK" },
  { code: "MXN", name: "Mexican Peso", symbol: "$" },
  { code: "MYR", name: "Malaysian Ringgit", symbol: "RM" },
  { code: "MZN", name: "Mozambican Metical", symbol: "MT" },
  { code: "NAD", name: "Namibian Dollar", symbol: "$" },
]
 


export const ScreenDesignConfiguration = {
  SignIn: {
    SignInAuthenticationType: "SignInAuthenticationType.EmailPassword",
  },
  // Collections: {
  //   CardDesign: KBCollectionCard.KBCollectionCardSliderBannerCard,
  // },
  Wishlist: {
    CardDesign:" KBProductCardEnum.KBProductCardOneByOne0",
    FlatListNumColumns: 1,
  },
  RecentlyViewed: {
    CardDesign: "KBProductCardEnum.KBProductCardOneByOne0",
    FlatListNumColumns: 1,
  },
  ProductByCollection: {
    CardDesign:" KBProductCardEnum.KBProductCardOneByTwo1",
    FlatListNumColumns: 2,
  },
  Home: {
    CircularProductCard:" KBHomeCollectionCardEnum.KBHomeCollectionCard2",
    HeaderCollectionDesign:
     " KBHomeCollectionHeaderCardEnum.KBHomeCollectionHeaderCard3",
    FlatListNumColumns: 1,
    ProductCardDesign:" KBHomeProductCollectionCardEnum.KBHomeProductCollectionCard2",
    ProductGridCardDesign:" KBHomeProductCollectionCardEnum.KBHomeProductCollectionCard3",
    ProductSingleCardDesign: "KBHomeProductCollectionCardEnum.KBHomeProductCollectionCard4",
    SliderCardDesign:"KBHomeProductCollectionCardEnum.KBHomeProductCollectionCard0",
  },
  Shop: {
    CardDesign:" KBShopCollectionCardEnum.KBShopCollectionCard1",
    FlatListNumColumns: 1,
  },
  SearchProductAndCollection: {
    SearchProductCard:" KBSearchProductCardEnum.KBSearchProductCardOneByOne0",
    SearchCollectionCard:
     " KBSearchCollectionCardEnum.KBSearchCollectionTitleCard",
    SegmentedControl:" SearchTypeConstant.all",
    ShowSegmentedControl: true,
  },
  YouTab: {
    ListCardDesign:" KBYouListCardEnum.KBYouListCard0",
    ProfileCardDesign: "KBYouProfileCardEnum.KBYouProfileCard0",
    LoginCardDesign:" KBYouLoginCardEnum.KBYouLoginCard0",
    LogoutCardDesign:" KBYouProfileCardEnum.KBYouProfileCard0",
    InviteCardDesign: "KBYouProfileCardEnum.KBYouProfileCard0",
  },
};


export const ShopifyConfig = [
  {
    key: "Api_url",
    label: "Storefront API URL",
    value: "url",
    name: "url"
  },
  {
    key: "Token",
    label: "Storefront Access Token",
    value: "Dummy",
    name:"token"
  },
  {
    key: "API_URL_ADMIN",
    label: "Admin API URL",
    value: "Admin",
    name: "Adminurl"
  },
  {
    key: "Access_token",
    label: "Admin Access Token",
    value: "tken",
    name:"admin"
  },
]

export const YouClientConfiguration = [
  {
    key: YouConfigType.PROFILE,
    icon:MdEdit,
    navigationData: "{}",
    rightIcon:" KBIconName.ArrowForward",
    leftIcon:" KBIconName.Edit",
    rightIconSet:" KBIconSet.MaterialIcons",
    leftIconSet:" KBIconSet.MaterialIcons",
    title: 'Edit Profile',
    // componentName: ScreenDesignConfiguration.YouTab.ListCardDesign,
  },
  {
    key: YouConfigType.ORDER,
    icon:MdLocalShipping ,
    navigateTo: "NavigationConstant.ORDER_LIST",
    navigationData: {},
    rightIcon: "KBIconName.ArrowForward",
    leftIcon: "KBIconName.LocalShipping",
    rightIconSet:" KBIconSet.MaterialIcons",
    leftIconSet: 'KBIconSet.MaterialIcons',
    title: 'Orders',
    // componentName: ScreenDesignConfiguration.YouTab.ListCardDesign,
  },
  {
    key: YouConfigType.ADDRESS,
    icon:FaAddressBook ,
    navigateTo:" NavigationConstant.ADDRESS_LIST",
    navigationData: {},
    rightIcon:" KBIconName.ArrowForward",
    leftIcon: "KBIconName.Address",
    rightIconSet: "KBIconSet.MaterialIcons",
    leftIconSet: "KBIconSet.Entypo",
    title: 'Address',
    // componentName: ScreenDesignConfiguration.YouTab.ListCardDesign,
  },
  {
    key: YouConfigType.SETTING,
    icon:AiFillSetting ,
    navigateTo:" NavigationConstant.SETTINGS",
    navigationData: {},
    rightIcon: "KBIconName.ArrowForward",
    leftIcon: "KBIconName.Setting",
    rightIconSet:" KBIconSet.MaterialIcons",
    leftIconSet: "KBIconSet.AntDesign",
    title: 'Settings',
    // componentName: ScreenDesignConfiguration.YouTab.ListCardDesign,
  },
];


export const Configuration = {
  Cart: {
    maximumPurchaseQuantity: 10,
  },
};