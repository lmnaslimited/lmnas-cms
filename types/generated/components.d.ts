import type { Schema, Attribute } from '@strapi/strapi';

export interface TitleTitle extends Schema.Component {
  collectionName: 'components_title_titles';
  info: {
    icon: 'address-card';
    description: '';
    displayName: 'title';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
  };
}

export interface TitleSubTitle extends Schema.Component {
  collectionName: 'components_title_sub_titles';
  info: {
    displayName: 'SubTitle';
  };
  attributes: {
    text1: Attribute.String;
    text2: Attribute.String;
    text3: Attribute.String;
  };
}

export interface SeoSbSchemaData extends Schema.Component {
  collectionName: 'components_seo_sb_schema_data';
  info: {
    displayName: 'SB schemaData';
  };
  attributes: {
    context: Attribute.String;
    type: Attribute.String;
    name: Attribute.String;
    description: Attribute.Text;
    image: Attribute.String;
    url: Attribute.String;
    author: Attribute.Component<'seo.sb-meta-attribute-b'>;
    publisher: Attribute.Component<'seo.sb-meta-attribute-b'>;
    datePublished: Attribute.String;
    mainEntityOfPage: Attribute.Component<'seo.sb-meta-attribute-b'>;
  };
}

export interface SeoSbMeta extends Schema.Component {
  collectionName: 'components_seo_sb_metas';
  info: {
    displayName: 'SB Meta B';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    pageUrl: Attribute.String;
    schemaData: Attribute.Component<'seo.sb-schema-data'>;
  };
}

export interface SeoSbMetaAttributeB extends Schema.Component {
  collectionName: 'components_seo_sb_meta_attribute_bs';
  info: {
    displayName: 'SB metaAttribute B';
  };
  attributes: {
    type: Attribute.String;
    name: Attribute.String;
    entityID: Attribute.String;
  };
}

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_metas';
  info: {
    icon: 'search-dollar';
    description: '';
    displayName: 'meta';
  };
  attributes: {
    content: Attribute.String;
    name: Attribute.Enumeration<['keyword', 'description', 'author']>;
  };
}

export interface SocialSocial extends Schema.Component {
  collectionName: 'components_social_socials';
  info: {
    icon: 'network-wired';
    description: '';
    displayName: 'social';
  };
  attributes: {
    handle: Attribute.String;
    link: Attribute.String;
    name: Attribute.String;
  };
}

export interface SocialContact extends Schema.Component {
  collectionName: 'components_social_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    icon: Attribute.String;
    contact: Attribute.String;
    title: Attribute.String;
    href: Attribute.String;
  };
}

export interface SocialContactSection extends Schema.Component {
  collectionName: 'components_social_contact_sections';
  info: {
    displayName: 'contactSection';
  };
  attributes: {
    tag: Attribute.String;
    title: Attribute.String;
    subTitle: Attribute.String;
    contactMenthos: Attribute.Component<'social.contact', true>;
  };
}

export interface ProductIndustryTabBody extends Schema.Component {
  collectionName: 'components_product_industry_tab_bodies';
  info: {
    displayName: 'tabBody';
    description: '';
  };
  attributes: {
    titleText1: Attribute.String;
    titleTitle2: Attribute.String;
    bannerText: Attribute.String;
    ctaText: Attribute.String;
    ctaHref: Attribute.String;
  };
}

export interface ProductIndustryProducttFeatures extends Schema.Component {
  collectionName: 'components_product_industry_productt_features';
  info: {
    displayName: 'producttFeatures';
  };
  attributes: {
    icon: Attribute.String;
    featureName: Attribute.String;
  };
}

export interface ProductIndustryProductTab extends Schema.Component {
  collectionName: 'components_product_industry_product_tabs';
  info: {
    displayName: 'productTab';
    description: '';
  };
  attributes: {
    tabName: Attribute.String;
    icon: Attribute.String;
    content: Attribute.Component<'product-industry.tab-body'>;
    features: Attribute.Component<'product-industry.productt-features', true>;
    usps: Attribute.Component<'product-industry.card', true>;
    title2: Attribute.Component<'title.title'>;
    featureDetailscard: Attribute.Component<'product-industry.card', true>;
    cta1: Attribute.Component<'cta.link'>;
    cta2: Attribute.Component<'cta.link'>;
  };
}

export interface ProductIndustryProductTabContent extends Schema.Component {
  collectionName: 'components_product_industry_product_tab_contents';
  info: {
    displayName: 'productTabContent';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'title.title', true>;
  };
}

export interface ProductIndustryProductBanner extends Schema.Component {
  collectionName: 'components_product_industry_product_banners';
  info: {
    displayName: 'productBanner';
  };
  attributes: {
    text: Attribute.String;
    cta: Attribute.Component<'cta.link'>;
  };
}

export interface ProductIndustryIndustryFeatures extends Schema.Component {
  collectionName: 'components_product_industry_industry_features';
  info: {
    displayName: 'industryFeatures';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'title.title'>;
    card: Attribute.Component<'product-industry.industry-card', true>;
    cta: Attribute.String;
    ctahref: Attribute.String;
  };
}

export interface ProductIndustryIndustryCard extends Schema.Component {
  collectionName: 'components_product_industry_industry_cards';
  info: {
    displayName: 'IndustryCard';
    description: '';
  };
  attributes: {
    icon: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    startHref: Attribute.String;
    start: Attribute.String;
    tryHref: Attribute.String;
    try: Attribute.String;
    imageUrl: Attribute.String;
    content: Attribute.String;
    cta: Attribute.String;
    ctahref: Attribute.String;
  };
}

export interface ProductIndustryHeroSection extends Schema.Component {
  collectionName: 'components_product_industry_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    title: Attribute.Component<'title.title'>;
    subTitle: Attribute.Component<'title.title'>;
    cta1: Attribute.Component<'cta.link'>;
    cta2: Attribute.Component<'cta.link'>;
  };
}

export interface ProductIndustryCard extends Schema.Component {
  collectionName: 'components_product_industry_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    icon: Attribute.String;
    title: Attribute.String;
    content: Attribute.String;
    text1: Attribute.String;
    text2: Attribute.String;
    highlightText: Attribute.String;
  };
}

export interface MarketingSubscribe extends Schema.Component {
  collectionName: 'components_marketing_subscribes';
  info: {
    icon: 'hand-point-up';
    displayName: 'subscribe';
  };
  attributes: {
    formId: Attribute.String;
  };
}

export interface LayoutNavs extends Schema.Component {
  collectionName: 'components_layout_navs';
  info: {
    displayName: 'navs';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    slug: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.String;
  };
}

export interface LayoutNavbarColumn extends Schema.Component {
  collectionName: 'components_layout_navbar_columns';
  info: {
    displayName: 'navbarColumn';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    navs: Attribute.Component<'layout.navs', true>;
    isDropdown: Attribute.Boolean;
    target: Attribute.String;
    rel: Attribute.String;
  };
}

export interface LayoutLayoutData extends Schema.Component {
  collectionName: 'components_layout_layout_data';
  info: {
    displayName: 'layoutData';
    description: '';
  };
  attributes: {
    footerData: Attribute.String;
    navbar: Attribute.String;
    floating: Attribute.String;
  };
}

export interface LayoutFooterSubtitle extends Schema.Component {
  collectionName: 'components_layout_footer_subtitles';
  info: {
    displayName: 'FooterSubtitle';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Component<'title.sub-title'>;
    phoneno: Attribute.String;
    mailid: Attribute.String;
    contactCta: Attribute.Component<'cta.link'>;
    address: Attribute.Component<'title.sub-title'>;
  };
}

export interface LayoutFooterLink extends Schema.Component {
  collectionName: 'components_layout_footer_links';
  info: {
    displayName: 'FooterLink';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    target: Attribute.String;
    rel: Attribute.String;
    icon: Attribute.String;
  };
}

export interface LayoutFooterColumn extends Schema.Component {
  collectionName: 'components_layout_footer_columns';
  info: {
    displayName: 'footerCta';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    ctas: Attribute.Component<'layout.footer-link', true>;
    subTitle: Attribute.Text;
    copyright: Attribute.Text;
  };
}

export interface CtaLink extends Schema.Component {
  collectionName: 'components_cta_links';
  info: {
    icon: 'link';
    displayName: 'link';
    description: '';
  };
  attributes: {
    linkText: Attribute.String;
    target: Attribute.String;
  };
}

export interface CtaButton extends Schema.Component {
  collectionName: 'components_cta_buttons';
  info: {
    icon: 'arrow-right';
    description: '';
    displayName: 'Button';
  };
  attributes: {
    target: Attribute.String;
    type: Attribute.Enumeration<['button', 'link']>;
    title: Attribute.Component<'title.title'>;
  };
}

export interface BodySection extends Schema.Component {
  collectionName: 'components_body_sections';
  info: {
    icon: 'align-center';
    description: '';
    displayName: 'section';
  };
  attributes: {
    content: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    type: Attribute.Enumeration<['basic', 'why']>;
    title: Attribute.Component<'title.title'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'title.title': TitleTitle;
      'title.sub-title': TitleSubTitle;
      'seo.sb-schema-data': SeoSbSchemaData;
      'seo.sb-meta': SeoSbMeta;
      'seo.sb-meta-attribute-b': SeoSbMetaAttributeB;
      'seo.meta': SeoMeta;
      'social.social': SocialSocial;
      'social.contact': SocialContact;
      'social.contact-section': SocialContactSection;
      'product-industry.tab-body': ProductIndustryTabBody;
      'product-industry.productt-features': ProductIndustryProducttFeatures;
      'product-industry.product-tab': ProductIndustryProductTab;
      'product-industry.product-tab-content': ProductIndustryProductTabContent;
      'product-industry.product-banner': ProductIndustryProductBanner;
      'product-industry.industry-features': ProductIndustryIndustryFeatures;
      'product-industry.industry-card': ProductIndustryIndustryCard;
      'product-industry.hero-section': ProductIndustryHeroSection;
      'product-industry.card': ProductIndustryCard;
      'marketing.subscribe': MarketingSubscribe;
      'layout.navs': LayoutNavs;
      'layout.navbar-column': LayoutNavbarColumn;
      'layout.layout-data': LayoutLayoutData;
      'layout.footer-subtitle': LayoutFooterSubtitle;
      'layout.footer-link': LayoutFooterLink;
      'layout.footer-column': LayoutFooterColumn;
      'cta.link': CtaLink;
      'cta.button': CtaButton;
      'body.section': BodySection;
    }
  }
}
