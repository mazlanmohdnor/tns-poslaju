/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_100306_36_SideDrawerChangeListenerImpl extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.telerik.android.primitives.widget.sidedrawer.DrawerChangeListener {
  public Object_vendor_100306_36_SideDrawerChangeListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public boolean onDrawerOpening(
      com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onDrawerOpening", boolean.class, args);
  }

  public void onDrawerOpened(
      com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onDrawerOpened", void.class, args);
  }

  public boolean onDrawerClosing(
      com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onDrawerClosing", boolean.class, args);
  }

  public void onDrawerClosed(
      com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onDrawerClosed", void.class, args);
  }

  public void onDrawerPan(com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onDrawerPan", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
