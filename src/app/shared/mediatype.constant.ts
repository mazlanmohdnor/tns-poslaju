import { HttpHeaders } from "@angular/common/http";

export class MediaType {
    public static ALL = "*/*";
    public static APPLICATION_ATOM_XML = "application/atom+xml";
    public static APPLICATION_ATOM_XML_HEADER = new HttpHeaders({ "Content-Type": MediaType.APPLICATION_ATOM_XML });
    public static APPLICATION_ATOM_XML_VALUE = { headers: MediaType.APPLICATION_ATOM_XML_HEADER };
    
    public static APPLICATION_FORM_URLENCODED = "application/x-www-form-urlencoded";
    public static APPLICATION_FORM_URLENCODED_HEADER = new HttpHeaders({ "Content-Type": MediaType.APPLICATION_FORM_URLENCODED });
    public static APPLICATION_FORM_URLENCODED_VALUE = { headers: MediaType.APPLICATION_FORM_URLENCODED_HEADER };
    
    public static APPLICATION_JSON = "application/json";
    public static APPLICATION_JSON_HEADER = new HttpHeaders({ "Content-Type": MediaType.APPLICATION_JSON });
    public static APPLICATION_JSON_VALUE = { headers: MediaType.APPLICATION_JSON_HEADER };
    
    public static APPLICATION_JSON_UTF8 = MediaType.APPLICATION_JSON + ";charset=UTF-8";
    public static APPLICATION_JSON_UTF8_HEADER = new HttpHeaders({ "Content-Type": MediaType.APPLICATION_JSON_UTF8 });
    public static APPLICATION_JSON_UTF8_VALUE = { headers: MediaType.APPLICATION_JSON_UTF8_HEADER };
    
    public static APPLICATION_OCTET_STREAM = "application/octet-stream";
    public static APPLICATION_OCTET_STREAM_HEADER = new HttpHeaders({ "Content-Type": MediaType.APPLICATION_OCTET_STREAM });
    public static APPLICATION_OCTET_STREAM_VALUE = { headers: MediaType.APPLICATION_OCTET_STREAM_HEADER };
    
    public static APPLICATION_PDF = "application/pdf";
    public static APPLICATION_PDF_HEADER = new HttpHeaders({ "Content-Type": MediaType.APPLICATION_PDF });
    public static APPLICATION_PDF_VALUE = { headers: MediaType.APPLICATION_PDF_HEADER };
    
    public static APPLICATION_RSS_XML = "application/rss+xml";
    public static APPLICATION_RSS_XML_HEADER = new HttpHeaders({ "Content-Type": MediaType.APPLICATION_RSS_XML });
    public static APPLICATION_RSS_XML_VALUE = { headers: MediaType.APPLICATION_RSS_XML_HEADER };
    
    public static APPLICATION_XHTML_XML = "application/xhtml+xml";
    public static APPLICATION_XHTML_XML_HEADER = new HttpHeaders({ "Content-Type": MediaType.APPLICATION_XHTML_XML });
    public static APPLICATION_XHTML_XML_VALUE = { headers: MediaType.APPLICATION_XHTML_XML_HEADER };
    
    public static APPLICATION_XML = "application/xml";
    public static APPLICATION_XML_HEADER = new HttpHeaders({ "Content-Type": MediaType.APPLICATION_XML });
    public static APPLICATION_XML_VALUE = { headers: MediaType.APPLICATION_XML_HEADER };
    
    public static IMAGE_GIF = "image/gif";
    public static IMAGE_GIF_HEADER = new HttpHeaders({ "Content-Type": MediaType.IMAGE_GIF });
    public static IMAGE_GIF_VALUE = { headers: MediaType.IMAGE_GIF_HEADER };
    
    public static IMAGE_JPEG = "image/jpeg";
    public static IMAGE_JPEG_HEADER = new HttpHeaders({ "Content-Type": MediaType.IMAGE_JPEG });
    public static IMAGE_JPEG_VALUE = { headers: MediaType.IMAGE_JPEG_HEADER };
    
    public static IMAGE_PNG = "image/png";
    public static IMAGE_PNG_HEADER = new HttpHeaders({ "Content-Type": MediaType.IMAGE_PNG });
    public static IMAGE_PNG_VALUE = { headers: MediaType.IMAGE_PNG_HEADER };
    
    public static MULTIPART_FORM_DATA = "multipart/form-data";
    public static MULTIPART_FORM_DATA_HEADER = new HttpHeaders({ "Content-Type": MediaType.MULTIPART_FORM_DATA });
    public static MULTIPART_FORM_DATA_VALUE = { headers: MediaType.MULTIPART_FORM_DATA_HEADER };
    
    public static TEXT_EVENT_STREAM = "text/event-stream";
    public static TEXT_EVENT_STREAM_HEADER = new HttpHeaders({ "Content-Type": MediaType.TEXT_EVENT_STREAM });
    public static TEXT_EVENT_STREAM_VALUE = { headers: MediaType.TEXT_EVENT_STREAM_HEADER };
    
    public static TEXT_HTML = "text/html";
    public static TEXT_HTML_HEADER = new HttpHeaders({ "Content-Type": MediaType.TEXT_HTML });
    public static TEXT_HTML_VALUE = { headers: MediaType.TEXT_HTML_HEADER };
    
    public static TEXT_MARKDOWN = "text/markdown";
    public static TEXT_MARKDOWN_HEADER = new HttpHeaders({ "Content-Type": MediaType.TEXT_MARKDOWN });
    public static TEXT_MARKDOWN_VALUE = { headers: MediaType.TEXT_MARKDOWN_HEADER };
    
    public static TEXT_PLAIN = "text/plain";
    public static TEXT_PLAIN_HEADER = new HttpHeaders({ "Content-Type": MediaType.TEXT_PLAIN });
    public static TEXT_PLAIN_VALUE = { headers: MediaType.TEXT_PLAIN_HEADER };
    
    public static TEXT_XML = "text/xml";
    public static TEXT_XML_HEADER = new HttpHeaders({ "Content-Type": MediaType.TEXT_XML });
    public static TEXT_XML_VALUE = { headers: MediaType.TEXT_XML_HEADER };
}
