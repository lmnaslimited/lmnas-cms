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

export interface CtaLink extends Schema.Component {
  collectionName: 'components_cta_links';
  info: {
    icon: 'link';
    displayName: 'link';
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'title.title': TitleTitle;
      'social.social': SocialSocial;
      'seo.meta': SeoMeta;
      'marketing.subscribe': MarketingSubscribe;
      'body.section': BodySection;
      'cta.link': CtaLink;
      'cta.button': CtaButton;
    }
  }
}
