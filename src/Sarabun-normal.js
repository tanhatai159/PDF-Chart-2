﻿import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('Sarabun-normal.ttf', font);
this.addFont('Sarabun-normal.ttf', 'Sarabun', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])