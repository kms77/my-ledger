function downloadFile(file, filename){
    // create file link in browser's memory
    const href = URL.createObjectURL(file);

    // create "a" HTML element with href to file & click
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
}

export const Helpers = {
    downloadFile
}
