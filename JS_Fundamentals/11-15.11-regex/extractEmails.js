function extractEmails(text) {
    let pattern = /\b[a-z0-9]+[-._]?[a-z0-9]+@[a-z]+[-]?[a-z]*\.[a-z]+[\.a-z]*\b/g;
    let emails = [];
    let matches = text.match(pattern);
    if (matches) {
        emails.push(matches);
    }
    console.log(matches.join('\n'));

}
//extractEmails('Please contact us at: support@github.com. Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information')
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')