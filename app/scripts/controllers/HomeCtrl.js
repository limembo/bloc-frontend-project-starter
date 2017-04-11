(function() {
    function HomeCtrl(Room, Message, $cookies, $uibModal) {
        var home = this;
        home.rooms = Room.all;
        home.currentUser = $cookies.get('blocChatCurrentUser');
        home.currentRoom = null;
        home.addRoom = function() {
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/modal.html',
                size: 'lg',
                controller: 'ModalCtrl as modal'
            });
        }

        home.setCurrentRoom = function(room){
            home.currentRoom = room;
            home.messages = Message.getByRoomId(home.currentRoom.$id);
            console.log(home.messages);
        }


        home.sendMessage = function() {
            home.newMessage.roomId = home.currentRoom.$id;
            home.newMessage.username = home.currentUser;
            Message.send(home.newMessage);
        }
               
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();
