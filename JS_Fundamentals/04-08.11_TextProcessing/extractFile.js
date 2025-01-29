function extractFile(str) {
    let fileParts = str.split('\\');
    let file = fileParts.pop();
    let lastIndex = file.lastIndexOf('.');
    let fileName = file.substring(0, lastIndex);
    let fileExtension = file.substring(lastIndex + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')