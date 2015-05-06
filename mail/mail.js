/*!

Bixbyte

    This mailer class uses the mandrill api to send and track mail.

    You can sign up for 12,000 free email per month at https://mandrillapp.com
*/

/* Replace this with your actual API key from mandrill for this to work */
var api_key = require('../../safe/mandrill/index.js');

var mandrill = require("mandrill-api/mandrill");
var mandrill_client = new mandrill.Mandrill( api_key );

function bixMail( htmlMail, textMail, fromEmail, fromName, toEmail, headers, attachments, sendAt, success, failure ){

    this.message = {

        "html" : htmlMail,
        "text" : textMail,
        "from_email": fromEmail,
        "from_name": fromName,
        "to": toEmail,
        "headers": headers,
        "important": true,
        "track_opens": true,
        "attachments": attachments

    }

    this.properties = {

        "async": true,
        "send_at": sendAt

    }

    /** THE TEMPLATE

     var message = {

        "to": [{
                        "email": "ianmin2@live.com",
                        "name": "Ian Innocent Mbae",
                        "type": "to"
                     }],
        "headers": {
            "Reply-To": "info@bixbyte.cf"
        },

        "attachments": [{
        "type": "application/x-gzip",
        "name": g_user + "_" + g_album + ".tar.gz",
        "content": f
                                    }]

    };

*/

    mandrill_client.messages.send({
        "message": this.mail,
        "async": this.properties.async,
        "send_at": this.properties.send_at
    }, function( result ){
        success( result );
    }, function ( err ){
        failure( err );
    });

}

