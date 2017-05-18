package so.doo.app.plugins;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

import android.content.Context;
import android.util.Log;

public class Install extends CordovaPlugin {
	
	private static Context ctx;
    private static final String TAG = "INTALL";
    private static final String SAVEDIR = "lltao"; // you can change it

    
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        ctx = cordova.getActivity().getApplicationContext();
    }
    
    /**
     * Executes the request and returns PluginResult.
     *
     * @param action            The action to execute.
     * @param args              JSONArry of arguments for the plugin.
     * @param callbackContext   The callback id used when calling back into JavaScript.
     * @return                  True if the action was valid, false otherwise.
     * @throws JSONException 
     */
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        // install
        if (action.equals("install")) {
            String path = args.getString(0);
            int rs = InstallUtils.install(ctx, path);
            if(rs == 1) {
                Log.i(TAG, "SUCCESS");
            } else {
                InstallUtils.installNormal(ctx, path);
                Log.e(TAG, "FAIL" + rs);
            }
        }
        
        return true;
    }

}



