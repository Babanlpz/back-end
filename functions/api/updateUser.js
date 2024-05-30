const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

/**
 * Update a user's idendification data.
 * @param body {String, Object}
 * @return {string} message success or error
 * @forPlay https://us-central1-codersbaban.cloudfunctions.net/updateUser
 * @documentation https://firebase.google.com/docs/auth/admin/manage-users#update_a_user
 */
exports.updateUser = functions.https.onRequest((req, res) => {
  const uid = req.body.uid;
  const data = req.body.data;

  return cors(req, res, async () => {
    try {
      const userRecord = await admin.auth().updateUser(uid, data);
      res.send(userRecord.toJSON());
    } catch (error) {
      res.status(500).send(error);
    }
  });
});
