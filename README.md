# BallyComms website

A static multi-page website for BallyComms, using a darker visual direction inspired by wireless infrastructure, rural connectivity and the uploaded BallyComms logo mark.

## Pages included

- `index.html` - homepage
- `wireless-isp.html` - wireless ISP service page
- `business-wifi.html` - business WiFi design, guest WiFi and managed firewall maintenance
- `sectors.html` - farms, cafés, shops, workshops and offices
- `about.html` - Ballynahinch origin story
- `contact.html` - enquiry/support contact form using `mailto:`
- `managed-it.html` - lightweight redirect to `business-wifi.html` for any old links

## Assets

- `assets/logo.svg` - full dark-theme BallyComms wordmark using the uploaded circular B logo
- `assets/logo-mark.svg` - original uploaded circular B logo mark
- `assets/favicon.svg` - favicon based on the uploaded logo mark

## Service scope

The copy is intentionally focused. BallyComms is presented as a wireless ISP and business WiFi design provider, with managed firewall maintenance. It does not claim to provide broad day-to-day helpdesk work such as printer troubleshooting or general laptop support.

## Deployment

Upload all files and folders to the web root of the hosting account for `ballycomms.com`. The site has no build step and no backend dependency.

## Contact form

The form in `contact.html` is static. Submitting it opens the visitor's email app and sends either:

- New enquiries to `enquiries@ballycomms.com`
- Existing customer support to `support@ballycomms.com`

For production, this can be replaced with a server-side form handler later if required.


## v6 typography update

This version uses a softer system font stack, looser line height and more spacing around cards, forms and headings so the text no longer feels cramped.


## v7 homepage update

The homepage has been tightened around conversion and trust. It now uses specific calls to action such as site surveys and availability checks, clearer service area wording for Ballynahinch and rural County Down, stronger trust signals, a simple how-it-works section, practical customer examples and LocalBusiness structured data.
