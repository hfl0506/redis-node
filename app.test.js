const request = require("supertest");
const app = require("./app");

describe("test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .expect(200)
      .expect(
        JSON.stringify({
          config: {
            subdomains: {
              subdomain: [
                "http://secureline.tools.avast.com",
                "http://gf.tools.avast.com",
                "http://files.avast.com",
                "https://files.avast.com",
                "https://install.avcdn.net",
                "http://bits.ff.avast.com",
                "http://a381mp.avast.com",
                "http://s.files.avast.com",
                "http://bcu.tools.avast.com",
                "http://iavs9x.u.avast.com",
                "http://www.avg.com",
                "https://www.avg.com",
                "http://drup.d.avcdn.net",
                "https://drup.d.avcdn.net",
                "http://cleanup.u.avcdn.net",
                "https://cleanup.u.avcdn.net",
                "http://iabs.d.avast.com",
                "http://avast.ustab.d.avcdn.net",
                "http://files-download.avg.com",
                "https://files-download.avg.com",
                "http://download.ff.avast.com",
                "http://tuneup.avast.tools.avcdn.net",
                "http://cdn-download.avastbrowser.com",
                "https://cdn-download.avastbrowser.com",
                "http://mac-av.u.avcdn.net",
                "https://mac-av.u.avcdn.net",
                "http://iavs9x.avg.u.avcdn.net",
                "http://beta9x.avg.u.avcdn.net",
                "http://trackoff.d.avcdn.net",
                "https://s-mac-sl.avcdn.net",
                "https://s-bconprem.avcdn.net",
                "https://bits.ff.avast.com",
                "https://s-drup.avcdn.net",
                "https://install-macsl.avcdn.net",
                "https://s-install.avcdn.net",
                "https://cdn-download.avgbrowser.com",
                "https://s-trackoff.avcdn.net",
                "https://bits.avcdn.net",
              ],
            },
            cookies: {
              cookie: [
                {
                  name: "dlp-avast",
                  host: "amazon",
                  $t: "mmm_amz_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "baixaki",
                  $t: "mmm_bxk_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "computerbuild",
                  $t: "mmm_cbd_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "chip",
                  $t: "mmm_cip_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "comss",
                  $t: "mmm_cms_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "cnet",
                  $t: "mmm_cnt_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "dobreprogramy",
                  $t: "mmm_dbp_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "donwloaden",
                  $t: "mmm_dld_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "facebook",
                  $t: "mmm_fcb_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "filehippo",
                  $t: "mmm_fhp_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "forest",
                  $t: "mmm_for_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "html",
                  $t: "mmm_htm_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "homepate",
                  $t: "mmm_htr_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "naver",
                  $t: "mmm_nav_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "01net",
                  $t: "mmm_net_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "softpedia",
                  $t: "mmm_sfp_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "softonic",
                  $t: "mmm_sft_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "slunecnice",
                  $t: "mmm_slc_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "stahuj",
                  $t: "mmm_sth_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "tamindir",
                  $t: "mmm_tam_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "ultradownloads",
                  $t: "mmm_uld_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "uptodown",
                  $t: "mmm_utd_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avast",
                  host: "vector",
                  $t: "mmm_vct_dlp_777_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "amazon",
                  $t: "mmm_amz_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "baixaki",
                  $t: "mmm_bxk_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "computerbuild",
                  $t: "mmm_cbd_dlp_779_ppc_m",
                },
                { name: "dlp-avg", host: "chip", $t: "mmm_cip_dlp_779_ppc_m" },
                { name: "dlp-avg", host: "comss", $t: "mmm_cms_dlp_779_ppc_m" },
                { name: "dlp-avg", host: "cnet", $t: "mmm_cnt_dlp_779_ppc_m" },
                {
                  name: "dlp-avg",
                  host: "dobreprogramy",
                  $t: "mmm_dbp_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "donwloaden",
                  $t: "mmm_dld_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "facebook",
                  $t: "mmm_fcb_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "filehippo",
                  $t: "Mmm_fhp_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "forest",
                  $t: "mmm_for_dlp_779_ppc_m",
                },
                { name: "dlp-avg", host: "html", $t: "mmm_htm_dlp_779_ppc_m" },
                {
                  name: "dlp-avg",
                  host: "homepate",
                  $t: "mmm_htr_dlp_779_ppc_m",
                },
                { name: "dlp-avg", host: "naver", $t: "mmm_nav_dlp_779_ppc_m" },
                { name: "dlp-avg", host: "01net", $t: "mmm_net_dlp_779_ppc_m" },
                {
                  name: "dlp-avg",
                  host: "softpedia",
                  $t: "mmm_sfp_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "softonic",
                  $t: "mmm_sft_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "slunecnice",
                  $t: "mmm_slc_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "stahuj",
                  $t: "mmm_sth_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "tamindir",
                  $t: "mmm_tam_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "ultradownloads",
                  $t: "mmm_uld_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "uptodown",
                  $t: "mmm_utd_dlp_779_ppc_m",
                },
                {
                  name: "dlp-avg",
                  host: "vector",
                  $t: "mmm_vct_dlp_779_ppc_m",
                },
              ],
            },
          },
        })
      );
  });
});
