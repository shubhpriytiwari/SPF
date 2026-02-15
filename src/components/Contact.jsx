import React, { useState } from "react";
import { MapPin, Mail, Send, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // Links for Quick Actions
  const displayPhone = "+91 9662574799";
  const contactEmail = "spftechnologies2002@gmail.com";
  
  const whatsappLink = `https://wa.me/919662574799?text=Hello%20SPF%20Technologies,%20I%20have%20a%20technical%20inquiry.`;
  const mailtoLink = `mailto:${contactEmail}?subject=Technical Inquiry - SPF Technologies`;

  return (
    <section className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">
            Contact SPF Technologies for high-performance filtration and turnkey process solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg text-red-600"><MapPin /></div>
              <div>
                <h3 className="font-bold text-slate-900">Headquarters</h3>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                  20 Asha Palace, Chota Baganda Road<br/>Indore 452006, MP, India
                </p>
              </div>
            </div>

            {/* Clickable WhatsApp Card - Number is now visible */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:border-green-500 transition-all group"
            >
              <div className="bg-green-50 p-3 rounded-lg text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <MessageCircle />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">WhatsApp Chat</h3>
                <p className="text-green-600 font-black text-sm mt-1">{displayPhone}</p>
              </div>
            </a>

            {/* Clickable Email Card - Email is now visible */}
            <a 
              href={mailtoLink}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:border-blue-500 transition-all group"
            >
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Official Email</h3>
                <p className="text-blue-600 font-black text-sm mt-1 break-all">{contactEmail}</p>
              </div>
            </a>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 text-3xl">✓</div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Inquiry Received</h3>
                <p className="text-slate-500 font-medium mt-2">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/bptspf@gmail.com"
                method="POST"
                onSubmit={() => { setSubmitted(true); }}
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Inquiry from SPF Website" />
                <input type="hidden" name="_next" value={window.location.href} />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                    <input name="name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all" placeholder="Enter name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                    <input name="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all" placeholder="email@company.com" type="email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Project Requirements</label>
                  <textarea name="message" rows="4" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all" placeholder="Please describe your technical requirements..." required></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-red-600 transition-all flex items-center justify-center gap-2">
                      Submit Form <Send size={18} />
                    </button>

                    <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-5 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                        Chat on WhatsApp <MessageCircle size={20} />
                    </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}