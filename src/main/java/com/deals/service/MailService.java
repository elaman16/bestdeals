package com.deals.service;

//import javax.mail.internet.InternetAddress;

//import it.ozimov.springboot.templating.mail.model.Email;
//import it.ozimov.springboot.templating.mail.model.impl.EmailImpl;
//import it.ozimov.springboot.templating.mail.service.EmailService;
//import it.ozimov.springboot.templating.mail.service.exception.CannotSendEmailException;

//@Service
public class MailService {
/*	private final Logger log = LoggerFactory.getLogger(this.getClass());
	private static Status status = new Status();
	
	@Autowired
	private EmailService emailService;
	
	
	public Status sendMail(EMail eMail){
		log.info("Started");
		try {
			// Send mail to these people START
			List<InternetAddress> toAddresses = Lists.newArrayList();   
			toAddresses.add(new InternetAddress(eMail.getEmailDetail().getReceiverMail(), eMail.getEmailDetail().getReceiverName()));
			InternetAddress fromAddress = new InternetAddress(eMail.getSenderEmail(), eMail.getSenderName());
			// Send mail to these people END
			
			final Email email = EmailImpl.builder().from(fromAddress).to(toAddresses).subject(eMail.getEmailDetail().getSubject()).body("").encoding(Charset.forName("UTF-8")).build();
			final Map<String, Object> modelObject = new HashMap<>();
			modelObject.put("message", eMail.getEmailDetail().getMessage());
	                
	        emailService.send(email, eMail.getTemplateName(), modelObject);
			log.info("Done");
			status = App.getResponse(App.CODE_OK, App.STATUS_CREATE, App.MSG_MAIL_SENT, null);
		} catch (UnsupportedEncodingException e) {
			status = App.getResponse(App.CODE_FAIL, App.STATUS_CREATE, e.getMessage(), null);
		} catch (CannotSendEmailException e) {
			status = App.getResponse(App.CODE_FAIL, App.STATUS_CREATE, e.getMessage(), null);
			e.printStackTrace();
		}
		
		return status;
	}
	*/
}
