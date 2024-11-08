import type { Schema, Struct } from '@strapi/strapi';

export interface CommonImage extends Struct.ComponentSchema {
  collectionName: 'components_common_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    content: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonSection extends Struct.ComponentSchema {
  collectionName: 'components_common_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    content: Schema.Attribute.String;
  };
}

export interface CommonText extends Struct.ComponentSchema {
  collectionName: 'components_common_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface CommonTitle1 extends Struct.ComponentSchema {
  collectionName: 'components_common_title1s';
  info: {
    description: '';
    displayName: 'Title1';
  };
  attributes: {
    content: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<
      ['size-1', 'size-2', 'size-3', 'size-4']
    >;
    slug: Schema.Attribute.String;
  };
}

export interface CommonTitle2 extends Struct.ComponentSchema {
  collectionName: 'components_common_title2s';
  info: {
    displayName: 'Title2';
  };
  attributes: {
    content: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<
      ['size-1', 'size-2', 'size-3', 'size-4']
    >;
  };
}

export interface CommonTitle3 extends Struct.ComponentSchema {
  collectionName: 'components_common_title3s';
  info: {
    displayName: 'Title3';
  };
  attributes: {
    content: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<
      ['size-1', 'size-2', 'size-3', 'size-4']
    >;
  };
}

export interface CommonTitle4 extends Struct.ComponentSchema {
  collectionName: 'components_common_title4s';
  info: {
    displayName: 'Title4';
  };
  attributes: {
    content: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<
      ['size-1', 'size-2', 'size-3', 'size-4']
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.image': CommonImage;
      'common.section': CommonSection;
      'common.text': CommonText;
      'common.title1': CommonTitle1;
      'common.title2': CommonTitle2;
      'common.title3': CommonTitle3;
      'common.title4': CommonTitle4;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
