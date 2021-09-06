const { jsPDF } = require("jspdf");
// You'll need to make your image into a Data URL
// Use http://dataurl.net/#dataurlmaker
// doc.addImage(imgData, 'JPEG', 15, 40, 180, 160)
// var imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/

var pdfWrite = (load) => {
var doc = new jsPDF();
var fName = 'bob'
var date = '11.21.21'
var Name = ''
var lName = ''
var eMail = ''
var Phone = ''
var eName = ''
var ePhone = ''
doc.setFontSize(12)
// doc.addImage('./images/theyogidude.png','png',7,40,100,100)
doc.text(75, 15, 'Activity Waiver & Release')
doc.text(10, 30,'THIS ACTIVITY WAIVER & RELEASE (this "Agreement") dated '+ date + ' BETWEEN: ' + fName)
doc.text(10,35,'of (the "Participant") OF THE FIRST PART AND Augusto Rodriguez of 16425 Harbor blvd, ')
doc.text(10,40, 'unit 139 Fountain Valley, ca 92708 (the "Activity Provider") OF THE SECOND PART IN')
doc.text(10,45,'CONSIDERATION OF the covenants and agreements contained in this Agreement and other')
doc.text(10,50,'good and valuable consideration, the receipt of which is hereby acknowledged, the')
doc.text(10,55,'parties to this Agreement agree as follows:')
doc.setFontSize(10)
doc.text(10,65, 'Consideration ')
doc.text(10, 69, '1.  Being of lawful age and in consideration of being permitted to participate in the activity described below, the Participant')
doc.text(14,73, " releases and forever discharges the Activity Provider, the Activity Provider's spouse, heirs, executors, administrators,")
doc.text(14,77, " legal representatives and assigns from all manner of actions, causes of action, debts, accounts, bonds, contracts,")
doc.text(14,81, " claims and demands for or by reason of any injury to person or property, including injury resulting in the death of")
doc.text(14, 85, " the Participant, which has been or may be sustained as a consequence of the Participant's participation in the ")
doc.text(14, 89, " activity described below, and not withstanding that such damage, loss or injury may have been caused solely or ")
doc.text(14,93, " partly by the negligence of the Activity Provider.")
doc.text(10, 100, "2. The Participant understands that the Participant would not be permitted to participate in the activity described below unless")
doc.text(14,104, " the Participant signed this Agreement. ")
doc.text(10, 110,'Details of Activity ')
doc.text(10, 115, " 3. The Participant will participate in the following activity: Yoga and Fitness classes. ")
doc.text(10,120, "Concurrent Release ")
doc.text(10,125, "4. The Participant acknowledges that this Agreement is given with the express intention of effecting the extinguishment ")
doc.text(14,130," of certain obligations owed to the Participant and with the intention of binding the Participant's spouse, heirs, ")
doc.text(14,135, " executors, administrators, legal representatives and assigns.")
doc.text(10,140,"Fitness to Participate")
doc.text(10,145,"5. The Participant acknowledges that the Participant does not have any physical limitations, medical ailments, physical or mental")
doc.text(14, 150, " disabilities that would limit or prevent the Participant from participating in the above mentioned activity. If required, the ")
doc.text(14,155, "Participant will obtain a medical examination and clearance. ")
doc.text(10,160,"Full and Final Settlement")
doc.text(10,165,"6. The Participant hereby acknowledges and agrees that the Participant has carefully read this Agreement, that the Participant ")
doc.text(14,170," fully understands the same, and that the Participant is freely and voluntarily executing the same.")
doc.text(10,175,"7. The Participant understands that by signing this Agreement, the Participant agrees to be forever prevented from suing or ")
doc.text(14,180, " otherwise claiming against the Activity Provider for anyproperty loss or personal injury that the Participant may sustain ")
doc.text(14,185," while participating in or preparing for the above noted activity.")
doc.text(10,190,"8. The Participant has been given the opportunity and has been encouraged to seek independent legal advice prior to signing")
doc.text(14,195," this Agreement.")
doc.text(10,200,"9. This Agreement contains the entire agreement between the parties to this Agreement and the terms of this Agreement are")
doc.text(14,205," contractual and not a mere recital.")
doc.text(10,210,"Governing Law")
doc.text(10,215,"10. This Agreement will be governed by and construed in accordance with the laws of the State of California.")
doc.text(10,220,"Personal Information")
doc.text(14,225,"Frist Name: "+ Name)
doc.text(14,230,"Last Name: "+lName)
doc.text(14,235,"eMail: "+eMail)
doc.text(14,240,"Phone: "+Phone)
doc.text(10,245,"Emergency Contact")
doc.text(14,250,"Emergency contact name: "+eName)
doc.text(14,255,"Emergency contact phone number: "+ePhone)
doc.text(10,260," [X] By click on this box, I am signing this Agreement, I acknowledge that I have read both sides of this Release")
doc.text(10,265," Agreement form, understand it, and agree to be bound by its terms. I further acknowledge that I sign this")
doc.text(10,270,"Release Agreement voluntarily and I am at least eighteen years of age.")
doc.save('/assests/waivers/'+date+fName+'.pdf');

};

pdfWrite();


module.exports = {
    pdfWrite
}