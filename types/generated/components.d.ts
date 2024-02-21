import type { Schema, Attribute } from '@strapi/strapi';

export interface MiniCompReportFile extends Schema.Component {
  collectionName: 'components_mini_comp_report_files';
  info: {
    displayName: 'ReportFile';
    icon: 'filePdf';
    description: '';
  };
  attributes: {
    FileName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    asset: Attribute.Media & Attribute.Required;
  };
}

export interface MiniCompReportTab extends Schema.Component {
  collectionName: 'components_mini_comp_report_tabs';
  info: {
    displayName: 'ReportTab';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    TabTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    ReportFile: Attribute.Component<'mini-comp.report-file', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 10;
      }>;
  };
}

export interface PageCompReports extends Schema.Component {
  collectionName: 'components_page_comp_reports';
  info: {
    displayName: 'Reports';
    icon: 'folder';
  };
  attributes: {
    ReportTab: Attribute.Component<'mini-comp.report-tab', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 2;
        max: 2;
      }>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['facebook', 'twitter', 'linkedin']> &
      Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'server';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    metaSocial: Attribute.Component<'shared.meta-social', true> &
      Attribute.Required;
    keywords: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'mini-comp.report-file': MiniCompReportFile;
      'mini-comp.report-tab': MiniCompReportTab;
      'page-comp.reports': PageCompReports;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
