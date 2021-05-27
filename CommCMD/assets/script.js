var myId;
var newMessage;
Termpage.init(document.getElementById('window'), (command) => {
        command = command;
        if (command === '##New Message Received##'){
            return newMessage;
        }
        if (command.includes('to: ')) {
          return "The arg 'to' cannot have a space after the ':'";
        } else {
        	if (command.includes(' -send')){
          		var form = {
                    id: command.split('to:')[1].split(' msg:')[0],
                    payload: command.split('msg:')[1].split(' -send')[0],
                    user: myId
                };
                $.ajax({
                    type: "POST",
                    url: "/send",
                    data: form,
                });
                return "Sending message from "+form.user+" to "+form.id;
          	}else{
            	return "Error: To send a message, the arg '-send' must be present.";
            }
        }
      }, {

      });
