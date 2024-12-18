import { ChatResponse } from './types';

export const responses: Record<string, ChatResponse> = {
  services: {
    content: "Great question! At PropLit Consulting, we offer a range of services, including:\n\n" +
            "• Skills Development: Needs analysis, mentoring, and coaching\n" +
            "• Business Startup Support: Business plans, funding applications, and compliance\n" +
            "• Project Management: Rural development, special community projects, and more\n\n" +
            "Would you like me to share more details about any specific service?",
    suggestions: ['Skills Development', 'Business Support', 'Project Management']
  },
  grants: {
    content: "I'm happy to help! At PropLit, we simplify grant applications by guiding you through every step:\n\n" +
            "1. Conducting a needs analysis to align with available opportunities\n" +
            "2. Preparing required documentation and proposals\n" +
            "3. Supporting the submission process\n\n" +
            "Would you like to schedule a consultation with our team?",
    suggestions: ['Schedule Consultation', 'Learn More']
  },
  location: {
    content: "We're located in Johannesburg South at 16 Vesting Street, Naturena, 2095. Our office is easily accessible and we welcome visitors!\n\n" +
            "Would you like directions or would you prefer to schedule a visit?",
    suggestions: ['Get Directions', 'Schedule Visit']
  },
  default: {
    content: "I'm here to help! Feel free to ask about our services, grant applications, or schedule a consultation. How can I assist you today?",
    suggestions: ['Our Services', 'Grant Applications', 'Schedule Consultation']
  }
};