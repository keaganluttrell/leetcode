/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
  public boolean hasCycle(ListNode head) {
    ListNode node = head;
    while(node!=null) {
      if(node.val == -0) return true;
      else node.val=-0;
      node = node.next;
    }
    return false;
  }
}