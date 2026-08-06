/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
     let set = new Set();

    for (let email of emails) {

        let [local, domain] = email.split("@");

        // Ignore everything after '+'
        local = local.split("+")[0];

        // Remove all dots
        local = local.replace(/\./g, "");

        // Store normalized email
        set.add(local + "@" + domain);
    }

    return set.size;
};