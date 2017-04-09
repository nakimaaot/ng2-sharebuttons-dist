/** Share links functions:
 *  ShareLinks: Provide a share links for all services
 * */
import { ShareArgs } from './share-buttons.class';
export declare module ShareLinks {
    function fbShare(args: ShareArgs): any;
    function twitterShare(args: ShareArgs): any;
    function linkedInShare(args: ShareArgs): any;
    function redditShare(args: ShareArgs): any;
    function tumblrShare(args: ShareArgs): any;
    function stumbleShare(args: ShareArgs): any;
    function gPlusShare(args: ShareArgs): string;
    function pinShare(args: ShareArgs): string;
    function whatsappShare(args: ShareArgs): string;
}
