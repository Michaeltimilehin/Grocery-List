$(document).ready(function () {
  $("#add-btn").click(function () {
    let input1 = $("#input").val()
    let input2 = $("#grocery").val()
    let input3 = $("#juwon").val()
    let input4 = $("#cold").val()
    let input5 = $("#box").val()
    let value = ""
    const food = [input1, input2, input3, input4, input5]
    const sortedArray = food.sort()
    sortedArray.forEach(function (list) {
      $("#grocery-list").append(list)
      $("#grocery-list").show()
      if (input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "" && input5 !== ""
      ) {
        value += list + "<br>"
        $("#grocery-list").html(value)
        $(".warn").hide()
        $("#grocery-list").show()

      } else {
        $(".warn").html("Please fill in the input space")
        $("#grocery-list").hide()
        $(".warn").show()
      }



    })
  })





})