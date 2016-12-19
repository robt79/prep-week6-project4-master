$(document).ready(function(){
  $("#1").click(function(){
    $("#hidden1").css("display", "inline")
  })
  $('#submitBtn').click(function(){
    var text = $('#textInput').val();
    console.log(text);
    $('<h3>' + text + '</h3>').insertAfter('#submitBtn');
  })
  $("#2").click(function(){
    $("#hidden2").css("display", "inline")
  })
  $('.chex input').click(function(){
    $('h2').toggleClass('hidden');
  })
  $("#3").click(function(){
    $("#hidden3").css("display", "inline")
  })
  $('.table-striped').append('<tr><td>Olive</td><td>9</td><td>Hangry</td></tr>');


  $("#4").click(function(){
    $("#hidden4").css("display", "inline")
  })
  $('.table-striped tbody').children().each(function(){
    var hungerLevel = $(this).children('td:nth-child(3)');
    if (hungerLevel.text() === 'Content') {
      $(hungerLevel).css('color', '#629632');
    } else {
      $(hungerLevel).css('color', '#CD2626');
    }
    })

  $("#5").click(function(){
    $("#hidden5").css("display", "inline")
  })
  $('.btn-warning').click(function(){
    $('.table-striped tbody').children().each(function(){
      var weight = $(this).children('td:nth-child(2)');
      if ($(weight).text() < 10){
          $(this).hide();
      }
    })
  })

  $("#6").click(function(){
    $("#hidden6").css("display", "inline")
  })
  $('.btn-success').click(function(){
    $('tbody').children().each(function(){
      var name = $(this).children('td:nth-child(1)');
     $(name).text($(name).text().toUpperCase() + '!!!');
    })
  })
  $("#7").click(function(){
    $("#hidden7").css("display", "inline")
  })
  $('.btn-primary').click(function(){
    $('.table-striped').toggle();
  })
  $("#8").click(function(){
    $("#hidden8").css("display", "inline")
  })
  $('#disableUs input').prop('disabled', true);
  $('#disableUs a').click(function (e){
      e.preventDefault();
  })
  $("#9").click(function(){
    $("#hidden9").css("display", "inline")
  })
  $('.dropdown').change(function(){
    var value = $(this).find('option:selected').text();
    $('<h3>' + value + '</h3>').insertAfter('.dropdown');
   })


  $("#10").click(function(){
    $("#hidden10").css("display", "inline")
  })
  $("<input type='button' class='btn btn-secondary' value='add'/>").insertBefore("#alertList");
    $("<input type='button' class='btn btn-danger' value='remove'/>").insertBefore("#alertList");

    var count = 0;
    $("#alertList").children().each(function () {
        count += 1;
        update();
    });

    $("#alert10").click(function () {
        alert(count);
    });


  $("#11").click(function(){
    $("#hidden11").css("display", "inline")
  })
  $(".btn-secondary").click(function () {
      $("#alertList").append("<li>New Item</li>");
      count += 1;
      update();
  });

  $(".btn-danger").click(function () {
      $("#alertList").children('li:last-child').remove();
      count -= 1;
      update();
  });




  $("#12").click(function(){
    $("#hidden12").css("display", "inline")
  })
  function update() {
    $('#displayList12').text('The count is: ' + count);
   }


});
