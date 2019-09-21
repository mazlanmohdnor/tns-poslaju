import { environment } from "~/environments/environment";

export const SIDE_MENU = {
    APP_IMG: "../../../assets/org.jpg",
    EMAIL_SUBJECT_FEEDBACK: `Pos Laju Tracking App Feedback - ${ environment.appVersion }`,
    EMAIL_BODY: `
        Give your feedback about this app.
          <br><br>
          Feedback:
      `,
    shareMessage: "Pos Laju Tracking is a free app to help users to track Pos Laju Parcel. Download now at Google Play Store",
    promptMsg: "Please add at least one tracking number first to help POS Laju track your parcel easily."
};


