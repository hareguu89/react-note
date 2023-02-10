export enum SiteType {
  INSTAGRAMURL = "https://www.instagram.com/yesbee.global/",
  FACEBOOKURL = "https://www.facebook.com/yesbee.global/",
  MEDIUMURL = "https://medium.com/@yesbee0409",
  TERMANDCONDITON = "https://yesbee-dev.notion.site/Agreement-96dde3e76f4d4f46a21c89837f440519",
  PRIVATEPOLICY = "https://yesbee-dev.notion.site/Privacy-Policy-ffbbf0a1027e4abdb067f8c0236e3abb",
  COMPANYURL = "https://www.aionco.kr/",
  KAKAOTALKCONTACT = "https://pf.kakao.com/_XJxjuK",
  SUPPORTEMAIL = "yesbee@yesbee.com",
  SUPPORTPHONENUMBER = "+82-70-4772-9339",
}


export enum EntryPointType {
  CART = "CART",
  PRODUCT_DETAIL = "PRODUCT_DETAIL",
  BRAND_ROOM = "BRAND_ROOM",
  PRODUCT_LIST = "PRODUCT_LIST",
  BY_USER_SUBSCRIPTION = "BY_USER_SUBSCRIPTION",
}

export enum ArticleType {
  YESBEE_CHOICE = "YESBEE_CHOICE",
  BEAUTY_AWARD = "BEAUTY_AWARD",
}

export enum METHOD {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

export enum ERRORCODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
}
