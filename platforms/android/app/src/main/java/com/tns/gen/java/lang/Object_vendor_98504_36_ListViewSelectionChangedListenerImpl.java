/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_98504_36_ListViewSelectionChangedListenerImpl extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.telerik.widget.list.SelectionBehavior.SelectionChangedListener {
  public Object_vendor_98504_36_ListViewSelectionChangedListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onSelectionStarted() {
    java.lang.Object[] args = new java.lang.Object[0];
    com.tns.Runtime.callJSMethod(this, "onSelectionStarted", void.class, args);
  }

  public void onItemIsSelectedChanged(int param_0, boolean param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onItemIsSelectedChanged", void.class, args);
  }

  public void onSelectionEnded() {
    java.lang.Object[] args = new java.lang.Object[0];
    com.tns.Runtime.callJSMethod(this, "onSelectionEnded", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
