//yes i have very good naming for these files.
setTimeout(function() {
    //location.reload();
  }, 7200000);
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://corseverywheremiks.herokuapp.com/https://nobnabob.herokuapp.com/https://mixernob.herokuapp.com/https://mixernocors.herokuapp.com/' + options.url;
    }
  });
  var gahviplay = "0";
  var us2 = "0";
  $(document).ready(function() {


    var videostufflol = window.location.href;
    var params = videostufflol.split('?');
    var chanName = params[1]
    var chanName2 = params[2]
    viiName = "";



    usernamelol(params[1]);
    usernamelol2(params[2]);




    function usernamelol(name) {

      chanName = params[1];
      $.ajax({
        url: 'https://gdbrowser.com/api/profile/' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          gahviplay = json.stars
          $('#usr1').html(json.stars);
          $('#name1').html(json.username);

        }
      });

    }
    function usernamelol2(name) {

      chanName2 = params[2];
      $.ajax({
        url: 'https://gdbrowser.com/api/profile/' + chanName2,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          us2 = json.stars
          $('#usr2').html(json.stars);
          $('#name2').html(json.username);

        }
      });

    }
    $("#igm1").attr('src', `https://gdbrowser.com/icon/${chanName}`);
      $("#igm2").attr('src', `https://gdbrowser.com/icon/${chanName2}`);
    difodo.innerHTML = gahviplay - us2

    function loadVideo(naemhe) {
      viiName = naemhe;
      setTimeout(
        function() {
          loadVideo3($('#chnlName').val());
        }, 5000);


    }
    setInterval(function() {
      chanName = params[1];
      $.ajax({
        url: 'https://gdbrowser.com/api/profile/' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          gahviplay = json.stars
          $('#usr1').html(json.stars);
          $('#name1').html(json.username);

        }
      });
      $.ajax({
        url: 'https://gdbrowser.com/icon/' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          gahviplay = json.stars
          $('#usr1').html(json.stars);
          $('#name1').html(json.username);

        }
      });
      chanName2 = params[2];
      $.ajax({
        url: 'https://gdbrowser.com/api/profile/' + chanName2,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          us2 = json.stars
          $('#usr2').html(json.stars);
          $('#name2').html(json.username);

        }
      });
      $("#igm1").attr('src', `https://gdbrowser.com/icon/${chanName}`);
      $("#igm2").attr('src', `https://gdbrowser.com/icon/${chanName2}`);
      difodo.innerHTML = gahviplay - us2


    }, 2000);

    $('#searchlolnoob3').click(function() {
      loadVideo($('#chnlName').val());
      setTimeout(
        function() {
          //do nothing
        }, 1000);
      location.href = 'http://mixerno.github.io/gdstats.html?' + viiName;

      console.log("BUTTON4")
    });


  });