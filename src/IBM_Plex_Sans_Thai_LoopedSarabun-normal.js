﻿import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('IBM_Plex_Sans_Thai_Looped,Sarabun-normal.ttf', font);
this.addFont('IBM_Plex_Sans_Thai_Looped,Sarabun-normal.ttf', 'IBM_Plex_Sans_Thai_Looped,Sarabun', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])