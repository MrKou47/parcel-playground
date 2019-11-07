export const preloadData = {
  "\/": {
    "body": {
      "name": "PREFERR",
      "description": "\u53c8\u4e00\u4e2aWordPress\u7ad9\u70b9",
      "url": "http:\/\/wp.preferr.ilovelook.cn",
      "home": "http:\/\/wp.preferr.ilovelook.cn",
      "gmt_offset": 8,
      "timezone_string": "Asia\/Shanghai",
      "namespaces": [
        "oembed\/1.0",
        "wp\/v2",
        "__experimental",
        "jwt-auth\/v1"
      ],
      "authentication": [],
      "routes": {
        "\/": {
          "namespace": "",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/"
          }
        },
        "\/oembed\/1.0": {
          "namespace": "oembed\/1.0",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "namespace": {
                  "required": false,
                  "default": "oembed\/1.0"
                },
                "context": {
                  "required": false,
                  "default": "view"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/oembed\/1.0"
          }
        },
        "\/oembed\/1.0\/embed": {
          "namespace": "oembed\/1.0",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "url": {
                  "required": true
                },
                "format": {
                  "required": false,
                  "default": "json"
                },
                "maxwidth": {
                  "required": false,
                  "default": 600
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/oembed\/1.0\/embed"
          }
        },
        "\/oembed\/1.0\/proxy": {
          "namespace": "oembed\/1.0",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "url": {
                  "required": true,
                  "description": "\u9700\u8981\u83b7\u53d6oEmbed\u6570\u636e\u7684\u94fe\u63a5\u3002",
                  "type": "string"
                },
                "format": {
                  "required": false,
                  "default": "json",
                  "enum": [
                    "json",
                    "xml"
                  ],
                  "description": "\u4f7f\u7528\u7684oEmbed\u683c\u5f0f\u3002",
                  "type": "string"
                },
                "maxwidth": {
                  "required": false,
                  "default": 600,
                  "description": "\u5d4c\u5165\u7684\u5143\u7d20\u7684\u6700\u5927\u5bbd\u5ea6\uff08\u50cf\u7d20\uff09\u3002",
                  "type": "integer"
                },
                "maxheight": {
                  "required": false,
                  "description": "\u5d4c\u5165\u7684\u5143\u7d20\u7684\u6700\u5927\u9ad8\u5ea6\uff08\u50cf\u7d20\uff09\u3002",
                  "type": "integer"
                },
                "discover": {
                  "required": false,
                  "default": true,
                  "description": "\u5bf9\u4e0d\u5728\u767d\u540d\u5355\u5185\u7684\u63d0\u4f9b\u8005\u662f\u5426\u8fdb\u884coEmbed\u53d1\u73b0\u8bf7\u6c42\u3002",
                  "type": "boolean"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/oembed\/1.0\/proxy"
          }
        },
        "\/wp\/v2": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "namespace": {
                  "required": false,
                  "default": "wp\/v2"
                },
                "context": {
                  "required": false,
                  "default": "view"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2"
          }
        },
        "\/wp\/v2\/widgets\/(?P<identifier>[a-zA-Z_\\x7f-\\xff][a-zA-Z0-9_\\x7f-\\xff]*)": {
          "namespace": "wp\/v2",
          "methods": [
            "POST",
            "PUT",
            "PATCH"
          ],
          "endpoints": [
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "identifier": {
                  "required": false,
                  "description": "Class name of the widget.",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/__experimental": {
          "namespace": "__experimental",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "namespace": {
                  "required": false,
                  "default": "__experimental"
                },
                "context": {
                  "required": false,
                  "default": "view"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/__experimental"
          }
        },
        "\/__experimental\/widget-areas": {
          "namespace": "__experimental",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": []
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/__experimental\/widget-areas"
          }
        },
        "\/__experimental\/widget-areas\/(?P<id>.+)": {
          "namespace": "__experimental",
          "methods": [
            "GET",
            "POST",
            "PUT",
            "PATCH"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "id": {
                  "required": true,
                  "description": "The sidebar\u2019s ID.",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "id": {
                  "required": true,
                  "description": "The sidebar\u2019s ID.",
                  "type": "string"
                },
                "content": {
                  "required": false,
                  "description": "The content for the object.",
                  "type": "object"
                }
              }
            }
          ]
        },
        "\/__experimental\/block-directory\/search": {
          "namespace": "__experimental",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": []
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/__experimental\/block-directory\/search"
          }
        },
        "\/__experimental\/block-directory\/install": {
          "namespace": "__experimental",
          "methods": [
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "POST"
              ],
              "args": []
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/__experimental\/block-directory\/install"
          }
        },
        "\/__experimental\/block-directory\/uninstall": {
          "namespace": "__experimental",
          "methods": [
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "DELETE"
              ],
              "args": []
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/__experimental\/block-directory\/uninstall"
          }
        },
        "\/jwt-auth\/v1": {
          "namespace": "jwt-auth\/v1",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "namespace": {
                  "required": false,
                  "default": "jwt-auth\/v1"
                },
                "context": {
                  "required": false,
                  "default": "view"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/jwt-auth\/v1"
          }
        },
        "\/jwt-auth\/v1\/token": {
          "namespace": "jwt-auth\/v1",
          "methods": [
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "POST"
              ],
              "args": []
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/jwt-auth\/v1\/token"
          }
        },
        "\/jwt-auth\/v1\/token\/validate": {
          "namespace": "jwt-auth\/v1",
          "methods": [
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "POST"
              ],
              "args": []
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/jwt-auth\/v1\/token\/validate"
          }
        },
        "\/wp\/v2\/posts": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "default": 10,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "after": {
                  "required": false,
                  "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u540e\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                  "type": "string"
                },
                "author": {
                  "required": false,
                  "default": [],
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6307\u5b9a\u7ed9\u7279\u5b9a\u4f5c\u8005\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "author_exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9a\u7ed9\u7279\u5b9a\u4f5c\u8005\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "before": {
                  "required": false,
                  "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u524d\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                  "type": "string"
                },
                "exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "include": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "offset": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u79fb\u4f4d\u7279\u5b9a\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "order": {
                  "required": false,
                  "default": "desc",
                  "enum": [
                    "asc",
                    "desc"
                  ],
                  "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                  "type": "string"
                },
                "orderby": {
                  "required": false,
                  "default": "date",
                  "enum": [
                    "author",
                    "date",
                    "id",
                    "include",
                    "modified",
                    "parent",
                    "relevance",
                    "slug",
                    "include_slugs",
                    "title"
                  ],
                  "description": "\u6309\u5bf9\u8c61\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u7279\u5b9a\u522b\u540d\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "status": {
                  "required": false,
                  "default": "publish",
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u72b6\u6001\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "enum": [
                      "publish",
                      "future",
                      "draft",
                      "pending",
                      "private",
                      "trash",
                      "auto-draft",
                      "inherit",
                      "request-pending",
                      "request-confirmed",
                      "request-failed",
                      "request-completed",
                      "any"
                    ],
                    "type": "string"
                  }
                },
                "categories": {
                  "required": false,
                  "default": [],
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u5728categories\u5206\u7c7b\u6cd5\u4e2d\u6307\u5b9a\u4e86\u7279\u5b9a\u9879\u76ee\u7684\u9879\u76ee\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "categories_exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u5728categories\u5206\u7c7b\u6cd5\u4e2d\u6ca1\u6709\u6307\u5b9a\u7279\u5b9a\u9879\u76ee\u7684\u9879\u76ee\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "tags": {
                  "required": false,
                  "default": [],
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u5728tags\u5206\u7c7b\u6cd5\u4e2d\u6307\u5b9a\u4e86\u7279\u5b9a\u9879\u76ee\u7684\u9879\u76ee\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "tags_exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u5728tags\u5206\u7c7b\u6cd5\u4e2d\u6ca1\u6709\u6307\u5b9a\u7279\u5b9a\u9879\u76ee\u7684\u9879\u76ee\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "sticky": {
                  "required": false,
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u7f6e\u9876\u9879\u76ee\u3002",
                  "type": "boolean"
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                  "type": "string"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "author": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684ID\u3002",
                  "type": "integer"
                },
                "excerpt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6458\u8981\u3002",
                  "type": "object"
                },
                "featured_media": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7279\u8272\u5a92\u4f53ID\u3002",
                  "type": "integer"
                },
                "comment_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u5f00\u653e\u8bc4\u8bba\u3002",
                  "type": "string"
                },
                "ping_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u63a5\u53d7ping\u3002",
                  "type": "string"
                },
                "format": {
                  "required": false,
                  "enum": [
                    "standard",
                    "aside",
                    "chat",
                    "gallery",
                    "link",
                    "image",
                    "quote",
                    "status",
                    "video",
                    "audio"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u683c\u5f0f\u3002",
                  "type": "string"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                },
                "sticky": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u662f\u5426\u662f\u7f6e\u9876\u7684\u3002",
                  "type": "boolean"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                },
                "categories": {
                  "required": false,
                  "description": "\u6b64\u5bf9\u8c61\u5728category\u5206\u7c7b\u6cd5\u4e2d\u6307\u5b9a\u7684\u9879\u76ee\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "tags": {
                  "required": false,
                  "description": "\u6b64\u5bf9\u8c61\u5728post_tag\u5206\u7c7b\u6cd5\u4e2d\u6307\u5b9a\u7684\u9879\u76ee\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts"
          }
        },
        "\/wp\/v2\/posts\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u8be5\u6587\u7ae0\u7684\u5bc6\u7801\uff0c\u5982\u6587\u7ae0\u53d7\u5bc6\u7801\u4fdd\u62a4\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                  "type": "string"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "author": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684ID\u3002",
                  "type": "integer"
                },
                "excerpt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6458\u8981\u3002",
                  "type": "object"
                },
                "featured_media": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7279\u8272\u5a92\u4f53ID\u3002",
                  "type": "integer"
                },
                "comment_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u5f00\u653e\u8bc4\u8bba\u3002",
                  "type": "string"
                },
                "ping_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u63a5\u53d7ping\u3002",
                  "type": "string"
                },
                "format": {
                  "required": false,
                  "enum": [
                    "standard",
                    "aside",
                    "chat",
                    "gallery",
                    "link",
                    "image",
                    "quote",
                    "status",
                    "video",
                    "audio"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u683c\u5f0f\u3002",
                  "type": "string"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                },
                "sticky": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u662f\u5426\u662f\u7f6e\u9876\u7684\u3002",
                  "type": "boolean"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                },
                "categories": {
                  "required": false,
                  "description": "\u6b64\u5bf9\u8c61\u5728category\u5206\u7c7b\u6cd5\u4e2d\u6307\u5b9a\u7684\u9879\u76ee\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "tags": {
                  "required": false,
                  "description": "\u6b64\u5bf9\u8c61\u5728post_tag\u5206\u7c7b\u6cd5\u4e2d\u6307\u5b9a\u7684\u9879\u76ee\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                }
              }
            },
            {
              "methods": [
                "DELETE"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "force": {
                  "required": false,
                  "default": false,
                  "description": "\u662f\u5426\u7ed5\u8fc7\u56de\u6536\u7ad9\u5e76\u5f3a\u884c\u5220\u9664\u3002",
                  "type": "boolean"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/revisions": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "include": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "offset": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u79fb\u4f4d\u7279\u5b9a\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "order": {
                  "required": false,
                  "default": "desc",
                  "enum": [
                    "asc",
                    "desc"
                  ],
                  "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                  "type": "string"
                },
                "orderby": {
                  "required": false,
                  "default": "date",
                  "enum": [
                    "date",
                    "id",
                    "include",
                    "relevance",
                    "slug",
                    "include_slugs",
                    "title"
                  ],
                  "description": "\u6309\u5bf9\u8c61\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/revisions\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "DELETE"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "force": {
                  "required": false,
                  "default": false,
                  "description": "\u8981\u6c42\u4e3atrue\uff0c\u56e0\u4e3a\u4fee\u8ba2\u7248\u672c\u4e0d\u80fd\u88ab\u79fb\u52a8\u5230\u56de\u6536\u7ad9\u3002",
                  "type": "boolean"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/posts\/(?P<id>[\\d]+)\/autosaves": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                  "type": "string"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "author": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684ID\u3002",
                  "type": "integer"
                },
                "excerpt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6458\u8981\u3002",
                  "type": "object"
                },
                "featured_media": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7279\u8272\u5a92\u4f53ID\u3002",
                  "type": "integer"
                },
                "comment_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u5f00\u653e\u8bc4\u8bba\u3002",
                  "type": "string"
                },
                "ping_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u63a5\u53d7ping\u3002",
                  "type": "string"
                },
                "format": {
                  "required": false,
                  "enum": [
                    "standard",
                    "aside",
                    "chat",
                    "gallery",
                    "link",
                    "image",
                    "quote",
                    "status",
                    "video",
                    "audio"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u683c\u5f0f\u3002",
                  "type": "string"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                },
                "sticky": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u662f\u5426\u662f\u7f6e\u9876\u7684\u3002",
                  "type": "boolean"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                },
                "categories": {
                  "required": false,
                  "description": "\u6b64\u5bf9\u8c61\u5728category\u5206\u7c7b\u6cd5\u4e2d\u6307\u5b9a\u7684\u9879\u76ee\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "tags": {
                  "required": false,
                  "description": "\u6b64\u5bf9\u8c61\u5728post_tag\u5206\u7c7b\u6cd5\u4e2d\u6307\u5b9a\u7684\u9879\u76ee\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                }
              }
            }
          ]
        },
        "\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/autosaves\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/pages": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "default": 10,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "after": {
                  "required": false,
                  "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u540e\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                  "type": "string"
                },
                "author": {
                  "required": false,
                  "default": [],
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6307\u5b9a\u7ed9\u7279\u5b9a\u4f5c\u8005\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "author_exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9a\u7ed9\u7279\u5b9a\u4f5c\u8005\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "before": {
                  "required": false,
                  "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u524d\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                  "type": "string"
                },
                "exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "include": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "menu_order": {
                  "required": false,
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u7279\u5b9amenu_order\u7684\u6587\u7ae0\u3002",
                  "type": "integer"
                },
                "offset": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u79fb\u4f4d\u7279\u5b9a\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "order": {
                  "required": false,
                  "default": "desc",
                  "enum": [
                    "asc",
                    "desc"
                  ],
                  "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                  "type": "string"
                },
                "orderby": {
                  "required": false,
                  "default": "date",
                  "enum": [
                    "author",
                    "date",
                    "id",
                    "include",
                    "modified",
                    "parent",
                    "relevance",
                    "slug",
                    "include_slugs",
                    "title",
                    "menu_order"
                  ],
                  "description": "\u6309\u5bf9\u8c61\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                  "type": "string"
                },
                "parent": {
                  "required": false,
                  "default": [],
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u4e00\u4e9b\u7279\u5b9a\u7236ID\u7684\u9879\u76ee\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "parent_exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6ca1\u6709\u7279\u5b9a\u7236ID\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "slug": {
                  "required": false,
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u7279\u5b9a\u522b\u540d\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "status": {
                  "required": false,
                  "default": "publish",
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u72b6\u6001\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "enum": [
                      "publish",
                      "future",
                      "draft",
                      "pending",
                      "private",
                      "trash",
                      "auto-draft",
                      "inherit",
                      "request-pending",
                      "request-confirmed",
                      "request-failed",
                      "request-completed",
                      "any"
                    ],
                    "type": "string"
                  }
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                  "type": "string"
                },
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "author": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684ID\u3002",
                  "type": "integer"
                },
                "excerpt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6458\u8981\u3002",
                  "type": "object"
                },
                "featured_media": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7279\u8272\u5a92\u4f53ID\u3002",
                  "type": "integer"
                },
                "comment_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u5f00\u653e\u8bc4\u8bba\u3002",
                  "type": "string"
                },
                "ping_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u63a5\u53d7ping\u3002",
                  "type": "string"
                },
                "menu_order": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u76f8\u5bf9\u4e8e\u540c\u7c7b\u578b\u5176\u4ed6\u5bf9\u8c61\u7684\u6392\u5e8f\u3002",
                  "type": "integer"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/pages"
          }
        },
        "\/wp\/v2\/pages\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u8be5\u6587\u7ae0\u7684\u5bc6\u7801\uff0c\u5982\u6587\u7ae0\u53d7\u5bc6\u7801\u4fdd\u62a4\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                  "type": "string"
                },
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "author": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684ID\u3002",
                  "type": "integer"
                },
                "excerpt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6458\u8981\u3002",
                  "type": "object"
                },
                "featured_media": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7279\u8272\u5a92\u4f53ID\u3002",
                  "type": "integer"
                },
                "comment_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u5f00\u653e\u8bc4\u8bba\u3002",
                  "type": "string"
                },
                "ping_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u63a5\u53d7ping\u3002",
                  "type": "string"
                },
                "menu_order": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u76f8\u5bf9\u4e8e\u540c\u7c7b\u578b\u5176\u4ed6\u5bf9\u8c61\u7684\u6392\u5e8f\u3002",
                  "type": "integer"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "DELETE"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "force": {
                  "required": false,
                  "default": false,
                  "description": "\u662f\u5426\u7ed5\u8fc7\u56de\u6536\u7ad9\u5e76\u5f3a\u884c\u5220\u9664\u3002",
                  "type": "boolean"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/revisions": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "include": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "offset": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u79fb\u4f4d\u7279\u5b9a\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "order": {
                  "required": false,
                  "default": "desc",
                  "enum": [
                    "asc",
                    "desc"
                  ],
                  "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                  "type": "string"
                },
                "orderby": {
                  "required": false,
                  "default": "date",
                  "enum": [
                    "date",
                    "id",
                    "include",
                    "relevance",
                    "slug",
                    "include_slugs",
                    "title"
                  ],
                  "description": "\u6309\u5bf9\u8c61\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/revisions\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "DELETE"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "force": {
                  "required": false,
                  "default": false,
                  "description": "\u8981\u6c42\u4e3atrue\uff0c\u56e0\u4e3a\u4fee\u8ba2\u7248\u672c\u4e0d\u80fd\u88ab\u79fb\u52a8\u5230\u56de\u6536\u7ad9\u3002",
                  "type": "boolean"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/pages\/(?P<id>[\\d]+)\/autosaves": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                  "type": "string"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "author": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684ID\u3002",
                  "type": "integer"
                },
                "excerpt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6458\u8981\u3002",
                  "type": "object"
                },
                "featured_media": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7279\u8272\u5a92\u4f53ID\u3002",
                  "type": "integer"
                },
                "comment_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u5f00\u653e\u8bc4\u8bba\u3002",
                  "type": "string"
                },
                "ping_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u63a5\u53d7ping\u3002",
                  "type": "string"
                },
                "menu_order": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u76f8\u5bf9\u4e8e\u540c\u7c7b\u578b\u5176\u4ed6\u5bf9\u8c61\u7684\u6392\u5e8f\u3002",
                  "type": "integer"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/autosaves\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/media": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "default": 10,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "after": {
                  "required": false,
                  "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u540e\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                  "type": "string"
                },
                "author": {
                  "required": false,
                  "default": [],
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6307\u5b9a\u7ed9\u7279\u5b9a\u4f5c\u8005\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "author_exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9a\u7ed9\u7279\u5b9a\u4f5c\u8005\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "before": {
                  "required": false,
                  "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u524d\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                  "type": "string"
                },
                "exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "include": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "offset": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u79fb\u4f4d\u7279\u5b9a\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "order": {
                  "required": false,
                  "default": "desc",
                  "enum": [
                    "asc",
                    "desc"
                  ],
                  "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                  "type": "string"
                },
                "orderby": {
                  "required": false,
                  "default": "date",
                  "enum": [
                    "author",
                    "date",
                    "id",
                    "include",
                    "modified",
                    "parent",
                    "relevance",
                    "slug",
                    "include_slugs",
                    "title"
                  ],
                  "description": "\u6309\u5bf9\u8c61\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                  "type": "string"
                },
                "parent": {
                  "required": false,
                  "default": [],
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u4e00\u4e9b\u7279\u5b9a\u7236ID\u7684\u9879\u76ee\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "parent_exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6ca1\u6709\u7279\u5b9a\u7236ID\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "slug": {
                  "required": false,
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u7279\u5b9a\u522b\u540d\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "status": {
                  "required": false,
                  "default": "inherit",
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u72b6\u6001\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "enum": [
                      "inherit",
                      "private",
                      "trash"
                    ],
                    "type": "string"
                  }
                },
                "media_type": {
                  "required": false,
                  "enum": [
                    "image",
                    "video",
                    "text",
                    "application",
                    "audio"
                  ],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u67d0\u4e00\u5a92\u4f53\u7c7b\u578b\u7684\u9644\u4ef6\u3002",
                  "type": "string"
                },
                "mime_type": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u67d0\u4e00MIME\u7c7b\u578b\u7684\u9644\u4ef6\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "author": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684ID\u3002",
                  "type": "integer"
                },
                "comment_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u5f00\u653e\u8bc4\u8bba\u3002",
                  "type": "string"
                },
                "ping_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u63a5\u53d7ping\u3002",
                  "type": "string"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                },
                "alt_text": {
                  "required": false,
                  "description": "\u5728\u9644\u4ef6\u672a\u80fd\u663e\u793a\u65f6\u663e\u793a\u7684\u66ff\u6362\u6587\u672c\u3002",
                  "type": "string"
                },
                "caption": {
                  "required": false,
                  "description": "\u9644\u4ef6\u8bf4\u660e\u3002",
                  "type": "object"
                },
                "description": {
                  "required": false,
                  "description": "\u9644\u4ef6\u7684\u63cf\u8ff0\u3002",
                  "type": "object"
                },
                "post": {
                  "required": false,
                  "description": "\u9644\u4ef6\u6240\u5c5e\u6587\u7ae0\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/media"
          }
        },
        "\/wp\/v2\/media\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "author": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684ID\u3002",
                  "type": "integer"
                },
                "comment_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u5f00\u653e\u8bc4\u8bba\u3002",
                  "type": "string"
                },
                "ping_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5bf9\u8c61\u662f\u5426\u63a5\u53d7ping\u3002",
                  "type": "string"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                },
                "alt_text": {
                  "required": false,
                  "description": "\u5728\u9644\u4ef6\u672a\u80fd\u663e\u793a\u65f6\u663e\u793a\u7684\u66ff\u6362\u6587\u672c\u3002",
                  "type": "string"
                },
                "caption": {
                  "required": false,
                  "description": "\u9644\u4ef6\u8bf4\u660e\u3002",
                  "type": "object"
                },
                "description": {
                  "required": false,
                  "description": "\u9644\u4ef6\u7684\u63cf\u8ff0\u3002",
                  "type": "object"
                },
                "post": {
                  "required": false,
                  "description": "\u9644\u4ef6\u6240\u5c5e\u6587\u7ae0\u7684ID\u3002",
                  "type": "integer"
                }
              }
            },
            {
              "methods": [
                "DELETE"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "force": {
                  "required": false,
                  "default": false,
                  "description": "\u662f\u5426\u7ed5\u8fc7\u56de\u6536\u7ad9\u5e76\u5f3a\u884c\u5220\u9664\u3002",
                  "type": "boolean"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/blocks": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "default": 10,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "after": {
                  "required": false,
                  "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u540e\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                  "type": "string"
                },
                "before": {
                  "required": false,
                  "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u524d\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                  "type": "string"
                },
                "exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "include": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "offset": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u79fb\u4f4d\u7279\u5b9a\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "order": {
                  "required": false,
                  "default": "desc",
                  "enum": [
                    "asc",
                    "desc"
                  ],
                  "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                  "type": "string"
                },
                "orderby": {
                  "required": false,
                  "default": "date",
                  "enum": [
                    "author",
                    "date",
                    "id",
                    "include",
                    "modified",
                    "parent",
                    "relevance",
                    "slug",
                    "include_slugs",
                    "title"
                  ],
                  "description": "\u6309\u5bf9\u8c61\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u7279\u5b9a\u522b\u540d\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "status": {
                  "required": false,
                  "default": "publish",
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u72b6\u6001\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "enum": [
                      "publish",
                      "future",
                      "draft",
                      "pending",
                      "private",
                      "trash",
                      "auto-draft",
                      "inherit",
                      "request-pending",
                      "request-confirmed",
                      "request-failed",
                      "request-completed",
                      "any"
                    ],
                    "type": "string"
                  }
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                  "type": "string"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/blocks"
          }
        },
        "\/wp\/v2\/blocks\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u8be5\u6587\u7ae0\u7684\u5bc6\u7801\uff0c\u5982\u6587\u7ae0\u53d7\u5bc6\u7801\u4fdd\u62a4\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                  "type": "string"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "DELETE"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "force": {
                  "required": false,
                  "default": false,
                  "description": "\u662f\u5426\u7ed5\u8fc7\u56de\u6536\u7ad9\u5e76\u5f3a\u884c\u5220\u9664\u3002",
                  "type": "boolean"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/blocks\/(?P<id>[\\d]+)\/autosaves": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                  "type": "string"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/blocks\/(?P<parent>[\\d]+)\/autosaves\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/__experimental\/block-areas": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "default": 10,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "after": {
                  "required": false,
                  "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u540e\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                  "type": "string"
                },
                "before": {
                  "required": false,
                  "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u524d\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                  "type": "string"
                },
                "exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "include": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "offset": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u79fb\u4f4d\u7279\u5b9a\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "order": {
                  "required": false,
                  "default": "desc",
                  "enum": [
                    "asc",
                    "desc"
                  ],
                  "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                  "type": "string"
                },
                "orderby": {
                  "required": false,
                  "default": "date",
                  "enum": [
                    "author",
                    "date",
                    "id",
                    "include",
                    "modified",
                    "parent",
                    "relevance",
                    "slug",
                    "include_slugs",
                    "title"
                  ],
                  "description": "\u6309\u5bf9\u8c61\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u7279\u5b9a\u522b\u540d\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "status": {
                  "required": false,
                  "default": "publish",
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u72b6\u6001\u7684\u6587\u7ae0\u3002",
                  "type": "array",
                  "items": {
                    "enum": [
                      "publish",
                      "future",
                      "draft",
                      "pending",
                      "private",
                      "trash",
                      "auto-draft",
                      "inherit",
                      "request-pending",
                      "request-confirmed",
                      "request-failed",
                      "request-completed",
                      "any"
                    ],
                    "type": "string"
                  }
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                  "type": "string"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/__experimental\/block-areas"
          }
        },
        "\/wp\/v2\/__experimental\/block-areas\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u8be5\u6587\u7ae0\u7684\u5bc6\u7801\uff0c\u5982\u6587\u7ae0\u53d7\u5bc6\u7801\u4fdd\u62a4\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                  "type": "string"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "DELETE"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "force": {
                  "required": false,
                  "default": false,
                  "description": "\u662f\u5426\u7ed5\u8fc7\u56de\u6536\u7ad9\u5e76\u5f3a\u884c\u5220\u9664\u3002",
                  "type": "boolean"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/__experimental\/block-areas\/(?P<id>[\\d]+)\/autosaves": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "status": {
                  "required": false,
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                  ],
                  "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                  "type": "string"
                },
                "title": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                  "type": "object"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "template": {
                  "required": false,
                  "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/__experimental\/block-areas\/(?P<parent>[\\d]+)\/autosaves\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/types": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/types"
          }
        },
        "\/wp\/v2\/types\/(?P<type>[\\w-]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "type": {
                  "required": false,
                  "description": "\u6587\u7ae0\u7c7b\u522b\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/statuses": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/statuses"
          }
        },
        "\/wp\/v2\/statuses\/(?P<status>[\\w-]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "status": {
                  "required": false,
                  "description": "\u72b6\u6001\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/taxonomies": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "type": {
                  "required": false,
                  "description": "\u9650\u5236\u7ed3\u679c\u4e3a\u5173\u8054\u5230\u7279\u5b9a\u6587\u7ae0\u7c7b\u578b\u7684\u5206\u7c7b\u6cd5\u3002",
                  "type": "string"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/taxonomies"
          }
        },
        "\/wp\/v2\/taxonomies\/(?P<taxonomy>[\\w-]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "taxonomy": {
                  "required": false,
                  "description": "\u5206\u7c7b\u6cd5\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/categories": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "default": 10,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "include": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "order": {
                  "required": false,
                  "default": "asc",
                  "enum": [
                    "asc",
                    "desc"
                  ],
                  "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                  "type": "string"
                },
                "orderby": {
                  "required": false,
                  "default": "name",
                  "enum": [
                    "id",
                    "include",
                    "name",
                    "slug",
                    "include_slugs",
                    "term_group",
                    "description",
                    "count"
                  ],
                  "description": "\u6309\u9879\u76ee\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                  "type": "string"
                },
                "hide_empty": {
                  "required": false,
                  "default": false,
                  "description": "\u662f\u5426\u9690\u85cf\u672a\u88ab\u6307\u5b9a\u5230\u4efb\u4f55\u6587\u7ae0\u7684\u9879\u76ee\u3002",
                  "type": "boolean"
                },
                "parent": {
                  "required": false,
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6307\u5b9a\u7ed9\u7279\u5b9a\u7236\u9879\u76ee\u7684\u9879\u76ee\u3002",
                  "type": "integer"
                },
                "post": {
                  "required": false,
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6307\u5b9a\u7ed9\u7279\u5b9a\u6587\u7ae0\u7684\u9879\u76ee\u3002",
                  "type": "integer"
                },
                "slug": {
                  "required": false,
                  "description": "\u901a\u8fc7\u8bbe\u7f6e\u4e00\u4e2a\u6216\u591a\u4e2a\u522b\u540d\u6765\u67e5\u8be2\u6307\u5b9a\u6807\u7b7e\u3002",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "description": {
                  "required": false,
                  "description": "\u9879\u76ee\u7684HTML\u63cf\u8ff0\u3002",
                  "type": "string"
                },
                "name": {
                  "required": true,
                  "description": "\u9879\u76ee\u7684HTML\u6807\u9898\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u9879\u76ee\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "parent": {
                  "required": false,
                  "description": "\u7236\u9879\u76eeID\u3002",
                  "type": "integer"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/categories"
          }
        },
        "\/wp\/v2\/categories\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u9879\u76ee\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u9879\u76ee\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "description": {
                  "required": false,
                  "description": "\u9879\u76ee\u7684HTML\u63cf\u8ff0\u3002",
                  "type": "string"
                },
                "name": {
                  "required": false,
                  "description": "\u9879\u76ee\u7684HTML\u6807\u9898\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u9879\u76ee\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "parent": {
                  "required": false,
                  "description": "\u7236\u9879\u76eeID\u3002",
                  "type": "integer"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                }
              }
            },
            {
              "methods": [
                "DELETE"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u9879\u76ee\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "force": {
                  "required": false,
                  "default": false,
                  "description": "\u8981\u6c42\u4e3atrue\uff0c\u56e0\u4e3a\u9879\u76ee\u4e0d\u80fd\u88ab\u79fb\u52a8\u5230\u56de\u6536\u7ad9\u3002",
                  "type": "boolean"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/tags": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "default": 10,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "include": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "offset": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u79fb\u4f4d\u7279\u5b9a\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "order": {
                  "required": false,
                  "default": "asc",
                  "enum": [
                    "asc",
                    "desc"
                  ],
                  "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                  "type": "string"
                },
                "orderby": {
                  "required": false,
                  "default": "name",
                  "enum": [
                    "id",
                    "include",
                    "name",
                    "slug",
                    "include_slugs",
                    "term_group",
                    "description",
                    "count"
                  ],
                  "description": "\u6309\u9879\u76ee\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                  "type": "string"
                },
                "hide_empty": {
                  "required": false,
                  "default": false,
                  "description": "\u662f\u5426\u9690\u85cf\u672a\u88ab\u6307\u5b9a\u5230\u4efb\u4f55\u6587\u7ae0\u7684\u9879\u76ee\u3002",
                  "type": "boolean"
                },
                "post": {
                  "required": false,
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6307\u5b9a\u7ed9\u7279\u5b9a\u6587\u7ae0\u7684\u9879\u76ee\u3002",
                  "type": "integer"
                },
                "slug": {
                  "required": false,
                  "description": "\u901a\u8fc7\u8bbe\u7f6e\u4e00\u4e2a\u6216\u591a\u4e2a\u522b\u540d\u6765\u67e5\u8be2\u6307\u5b9a\u6807\u7b7e\u3002",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "description": {
                  "required": false,
                  "description": "\u9879\u76ee\u7684HTML\u63cf\u8ff0\u3002",
                  "type": "string"
                },
                "name": {
                  "required": true,
                  "description": "\u9879\u76ee\u7684HTML\u6807\u9898\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u9879\u76ee\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/tags"
          }
        },
        "\/wp\/v2\/tags\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u9879\u76ee\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u9879\u76ee\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "description": {
                  "required": false,
                  "description": "\u9879\u76ee\u7684HTML\u63cf\u8ff0\u3002",
                  "type": "string"
                },
                "name": {
                  "required": false,
                  "description": "\u9879\u76ee\u7684HTML\u6807\u9898\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u9879\u76ee\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                }
              }
            },
            {
              "methods": [
                "DELETE"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u9879\u76ee\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "force": {
                  "required": false,
                  "default": false,
                  "description": "\u8981\u6c42\u4e3atrue\uff0c\u56e0\u4e3a\u9879\u76ee\u4e0d\u80fd\u88ab\u79fb\u52a8\u5230\u56de\u6536\u7ad9\u3002",
                  "type": "boolean"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/users": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "default": 10,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "include": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "offset": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u79fb\u4f4d\u7279\u5b9a\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "order": {
                  "required": false,
                  "default": "asc",
                  "enum": [
                    "asc",
                    "desc"
                  ],
                  "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                  "type": "string"
                },
                "orderby": {
                  "required": false,
                  "default": "name",
                  "enum": [
                    "id",
                    "include",
                    "name",
                    "registered_date",
                    "slug",
                    "include_slugs",
                    "email",
                    "url"
                  ],
                  "description": "\u6309\u5bf9\u8c61\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u901a\u8fc7\u4e00\u4e2a\u6216\u591a\u4e2a\u522b\u540d\u6765\u7b5b\u9009\u7528\u6237\u3002",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "roles": {
                  "required": false,
                  "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u5339\u914d\u81f3\u5c11\u4e00\u4e2a\u89d2\u8272\u7684\u7528\u6237\uff0c\u63a5\u53d7csv\u5217\u8868\u6216\u5355\u4e2a\u89d2\u8272\u3002",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "who": {
                  "required": false,
                  "enum": [
                    "authors"
                  ],
                  "description": "\u5c06\u7528\u6237\u7ed3\u679c\u9650\u5236\u4e3a\u6240\u6709\u4f5c\u8005\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "username": {
                  "required": true,
                  "description": "\u7528\u6237\u7684\u767b\u5f55\u540d\u3002",
                  "type": "string"
                },
                "name": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u663e\u793a\u540d\u3002",
                  "type": "string"
                },
                "first_name": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u540d\u3002",
                  "type": "string"
                },
                "last_name": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u59d3\u3002",
                  "type": "string"
                },
                "email": {
                  "required": true,
                  "description": "\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002",
                  "type": "string"
                },
                "url": {
                  "required": false,
                  "description": "\u7528\u6237\u7684URL\u3002",
                  "type": "string"
                },
                "description": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u63cf\u8ff0\u3002",
                  "type": "string"
                },
                "locale": {
                  "required": false,
                  "enum": [
                    "",
                    "en_US",
                    "zh_CN"
                  ],
                  "description": "\u7528\u6237\u7684\u8bed\u8a00\u73af\u5883\u3002",
                  "type": "string"
                },
                "nickname": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u6635\u79f0\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "roles": {
                  "required": false,
                  "description": "\u7528\u6237\u88ab\u8d4b\u4e88\u7684\u89d2\u8272\u3002",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "password": {
                  "required": true,
                  "description": "\u7528\u6237\u7684\u5bc6\u7801\uff08\u4ece\u4e0d\u88ab\u5305\u542b\uff09\u3002",
                  "type": "string"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/users"
          }
        },
        "\/wp\/v2\/users\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "username": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u767b\u5f55\u540d\u3002",
                  "type": "string"
                },
                "name": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u663e\u793a\u540d\u3002",
                  "type": "string"
                },
                "first_name": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u540d\u3002",
                  "type": "string"
                },
                "last_name": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u59d3\u3002",
                  "type": "string"
                },
                "email": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002",
                  "type": "string"
                },
                "url": {
                  "required": false,
                  "description": "\u7528\u6237\u7684URL\u3002",
                  "type": "string"
                },
                "description": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u63cf\u8ff0\u3002",
                  "type": "string"
                },
                "locale": {
                  "required": false,
                  "enum": [
                    "",
                    "en_US",
                    "zh_CN"
                  ],
                  "description": "\u7528\u6237\u7684\u8bed\u8a00\u73af\u5883\u3002",
                  "type": "string"
                },
                "nickname": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u6635\u79f0\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "roles": {
                  "required": false,
                  "description": "\u7528\u6237\u88ab\u8d4b\u4e88\u7684\u89d2\u8272\u3002",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u5bc6\u7801\uff08\u4ece\u4e0d\u88ab\u5305\u542b\uff09\u3002",
                  "type": "string"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                }
              }
            },
            {
              "methods": [
                "DELETE"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "force": {
                  "required": false,
                  "default": false,
                  "description": "\u8981\u6c42\u4e3atrue\uff0c\u56e0\u4e3a\u7528\u6237\u4e0d\u80fd\u88ab\u79fb\u52a8\u5230\u56de\u6536\u7ad9\u3002",
                  "type": "boolean"
                },
                "reassign": {
                  "required": true,
                  "description": "\u5c06\u88ab\u5220\u9664\u7528\u6237\u7684\u6587\u7ae0\u548c\u94fe\u63a5\u91cd\u65b0\u6307\u5b9a\u5230\u6b64\u7528\u6237ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/users\/me": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "username": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u767b\u5f55\u540d\u3002",
                  "type": "string"
                },
                "name": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u663e\u793a\u540d\u3002",
                  "type": "string"
                },
                "first_name": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u540d\u3002",
                  "type": "string"
                },
                "last_name": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u59d3\u3002",
                  "type": "string"
                },
                "email": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002",
                  "type": "string"
                },
                "url": {
                  "required": false,
                  "description": "\u7528\u6237\u7684URL\u3002",
                  "type": "string"
                },
                "description": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u63cf\u8ff0\u3002",
                  "type": "string"
                },
                "locale": {
                  "required": false,
                  "enum": [
                    "",
                    "en_US",
                    "zh_CN"
                  ],
                  "description": "\u7528\u6237\u7684\u8bed\u8a00\u73af\u5883\u3002",
                  "type": "string"
                },
                "nickname": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u6635\u79f0\u3002",
                  "type": "string"
                },
                "slug": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                  "type": "string"
                },
                "roles": {
                  "required": false,
                  "description": "\u7528\u6237\u88ab\u8d4b\u4e88\u7684\u89d2\u8272\u3002",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "password": {
                  "required": false,
                  "description": "\u7528\u6237\u7684\u5bc6\u7801\uff08\u4ece\u4e0d\u88ab\u5305\u542b\uff09\u3002",
                  "type": "string"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                }
              }
            },
            {
              "methods": [
                "DELETE"
              ],
              "args": {
                "force": {
                  "required": false,
                  "default": false,
                  "description": "\u8981\u6c42\u4e3atrue\uff0c\u56e0\u4e3a\u7528\u6237\u4e0d\u80fd\u88ab\u79fb\u52a8\u5230\u56de\u6536\u7ad9\u3002",
                  "type": "boolean"
                },
                "reassign": {
                  "required": true,
                  "description": "\u5c06\u88ab\u5220\u9664\u7528\u6237\u7684\u6587\u7ae0\u548c\u94fe\u63a5\u91cd\u65b0\u6307\u5b9a\u5230\u6b64\u7528\u6237ID\u3002",
                  "type": "integer"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/users\/me"
          }
        },
        "\/wp\/v2\/comments": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "default": 10,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "after": {
                  "required": false,
                  "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u540e\u53d1\u5e03\u7684\u8bc4\u8bba\u3002",
                  "type": "string"
                },
                "author": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5728\u6307\u5b9a\u7ed9\u7279\u5b9a\u7528\u6237ID\u7684\u8bc4\u8bba\uff0c\u9700\u8981\u6388\u6743\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "author_exclude": {
                  "required": false,
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9a\u7ed9\u7279\u5b9a\u7528\u6237ID\u7684\u8bc4\u8bba\uff0c\u9700\u8981\u6388\u6743\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "author_email": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u4e3a\u6307\u5b9a\u4f5c\u8005\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u9700\u8981\u6388\u6743\u3002",
                  "type": "string"
                },
                "before": {
                  "required": false,
                  "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u524d\u53d1\u5e03\u7684\u8bc4\u8bba\u3002",
                  "type": "string"
                },
                "exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "include": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "offset": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u96c6\u79fb\u4f4d\u7279\u5b9a\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "order": {
                  "required": false,
                  "default": "desc",
                  "enum": [
                    "asc",
                    "desc"
                  ],
                  "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                  "type": "string"
                },
                "orderby": {
                  "required": false,
                  "default": "date_gmt",
                  "enum": [
                    "date",
                    "date_gmt",
                    "id",
                    "include",
                    "post",
                    "parent",
                    "type"
                  ],
                  "description": "\u6309\u5bf9\u8c61\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                  "type": "string"
                },
                "parent": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u4e3a\u6307\u5b9a\u7236ID\u7684\u8bc4\u8bba\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "parent_exclude": {
                  "required": false,
                  "default": [],
                  "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9a\u7236ID\u7684\u8bc4\u8bba\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "post": {
                  "required": false,
                  "default": [],
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u4e3a\u5173\u8054\u5230\u6307\u5b9a\u6587\u7ae0ID\u7684\u8bc4\u8bba\u3002",
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "status": {
                  "required": false,
                  "default": "approve",
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u4e3a\u8bbe\u7f6e\u7279\u5b9a\u72b6\u6001\u7684\u8bc4\u8bba\uff0c\u9700\u8981\u6388\u6743\u3002",
                  "type": "string"
                },
                "type": {
                  "required": false,
                  "default": "comment",
                  "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u4e3a\u8bbe\u7f6e\u7279\u5b9a\u7c7b\u578b\u7684\u8bc4\u8bba\uff0c\u9700\u8981\u6388\u6743\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u8be5\u6587\u7ae0\u7684\u5bc6\u7801\uff0c\u5982\u6587\u7ae0\u53d7\u5bc6\u7801\u4fdd\u62a4\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST"
              ],
              "args": {
                "author": {
                  "required": false,
                  "description": "\u7528\u6237\u5bf9\u8c61\u7684ID\uff0c\u5982\u679c\u4f5c\u8005\u662f\u7528\u6237\u3002",
                  "type": "integer"
                },
                "author_email": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002",
                  "type": "string"
                },
                "author_ip": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684IP\u5730\u5740\u3002",
                  "type": "string"
                },
                "author_name": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684\u663e\u793a\u540d\u3002",
                  "type": "string"
                },
                "author_url": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684URL\u3002",
                  "type": "string"
                },
                "author_user_agent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684\u7528\u6237\u4ee3\u7406\u3002",
                  "type": "string"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "parent": {
                  "required": false,
                  "default": 0,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "post": {
                  "required": false,
                  "default": 0,
                  "description": "\u5173\u8054\u6587\u7ae0\u5bf9\u8c61\u7684ID\u3002",
                  "type": "integer"
                },
                "status": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u72b6\u6001\u3002",
                  "type": "string"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/comments"
          }
        },
        "\/wp\/v2\/comments\/(?P<id>[\\d]+)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed",
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "password": {
                  "required": false,
                  "description": "\u8bc4\u8bba\u6240\u5c5e\u6587\u7ae0\u7684\u5bc6\u7801\uff08\u5982\u679c\u8be5\u6587\u7ae0\u88ab\u5bc6\u7801\u4fdd\u62a4\uff09\u3002",
                  "type": "string"
                }
              }
            },
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "author": {
                  "required": false,
                  "description": "\u7528\u6237\u5bf9\u8c61\u7684ID\uff0c\u5982\u679c\u4f5c\u8005\u662f\u7528\u6237\u3002",
                  "type": "integer"
                },
                "author_email": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002",
                  "type": "string"
                },
                "author_ip": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684IP\u5730\u5740\u3002",
                  "type": "string"
                },
                "author_name": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684\u663e\u793a\u540d\u3002",
                  "type": "string"
                },
                "author_url": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684URL\u3002",
                  "type": "string"
                },
                "author_user_agent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u4f5c\u8005\u7684\u7528\u6237\u4ee3\u7406\u3002",
                  "type": "string"
                },
                "content": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                  "type": "object"
                },
                "date": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                  "type": "string"
                },
                "date_gmt": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                  "type": "string"
                },
                "parent": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61ID\u3002",
                  "type": "integer"
                },
                "post": {
                  "required": false,
                  "description": "\u5173\u8054\u6587\u7ae0\u5bf9\u8c61\u7684ID\u3002",
                  "type": "integer"
                },
                "status": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u72b6\u6001\u3002",
                  "type": "string"
                },
                "meta": {
                  "required": false,
                  "description": "\u5143\u5b57\u6bb5\u3002",
                  "type": "object"
                }
              }
            },
            {
              "methods": [
                "DELETE"
              ],
              "args": {
                "id": {
                  "required": false,
                  "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
                  "type": "integer"
                },
                "force": {
                  "required": false,
                  "default": false,
                  "description": "\u662f\u5426\u7ed5\u8fc7\u56de\u6536\u7ad9\u5e76\u5f3a\u884c\u5220\u9664\u3002",
                  "type": "boolean"
                },
                "password": {
                  "required": false,
                  "description": "\u8bc4\u8bba\u6240\u5c5e\u6587\u7ae0\u7684\u5bc6\u7801\uff08\u5982\u679c\u8be5\u6587\u7ae0\u88ab\u5bc6\u7801\u4fdd\u62a4\uff09\u3002",
                  "type": "string"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/search": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "view",
                    "embed"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "default": 10,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "type": {
                  "required": false,
                  "default": "post",
                  "enum": [
                    "post"
                  ],
                  "description": "\u9650\u5236\u7ed3\u679c\u4e3a\u4e00\u79cd\u5bf9\u8c61\u7c7b\u578b\u3002",
                  "type": "string"
                },
                "subtype": {
                  "required": false,
                  "default": "any",
                  "description": "\u9650\u5236\u7ed3\u679c\u4e3a\u4e00\u79cd\u6216\u591a\u79cd\u5bf9\u8c61\u5b50\u7c7b\u578b\u3002",
                  "type": "array",
                  "items": {
                    "enum": [
                      "post",
                      "page",
                      "any"
                    ],
                    "type": "string"
                  }
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/search"
          }
        },
        "\/wp\/v2\/block-renderer\/(?P<name>block-lab\/products)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "block-lab\/products\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/archives)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/archives\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/block)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/block\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/calendar)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/calendar\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/categories)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/categories\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/latest-comments)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/latest-comments\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/latest-posts)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/latest-posts\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/legacy-widget)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/legacy-widget\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/navigation-menu)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/navigation-menu\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/rss)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/rss\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/shortcode)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/shortcode\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/search)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/search\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-amazon)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-amazon\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-bandcamp)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-bandcamp\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-behance)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-behance\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-chain)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-chain\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-codepen)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-codepen\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-deviantart)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-deviantart\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-dribbble)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-dribbble\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-dropbox)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-dropbox\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-etsy)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-etsy\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-facebook)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-facebook\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-feed)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-feed\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-fivehundredpx)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-fivehundredpx\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-flickr)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-flickr\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-foursquare)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-foursquare\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-goodreads)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-goodreads\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-google)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-google\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-github)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-github\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-instagram)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-instagram\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-lastfm)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-lastfm\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-linkedin)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-linkedin\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-mail)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-mail\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-mastodon)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-mastodon\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-meetup)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-meetup\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-medium)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-medium\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-pinterest)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-pinterest\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-pocket)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-pocket\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-reddit)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-reddit\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-skype)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-skype\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-snapchat)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-snapchat\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-soundcloud)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-soundcloud\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-spotify)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-spotify\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-tumblr)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-tumblr\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-twitch)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-twitch\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-twitter)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-twitter\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-vimeo)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-vimeo\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-vk)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-vk\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-wordpress)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-wordpress\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-yelp)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-yelp\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/social-link-youtube)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/social-link-youtube\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/block-renderer\/(?P<name>core\/tag-cloud)": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "name": {
                  "required": false,
                  "description": "\u6b64\u533a\u5757\u7684\u552f\u4e00\u6ce8\u518c\u540d\u3002",
                  "type": "string"
                },
                "context": {
                  "required": false,
                  "default": "view",
                  "enum": [
                    "edit"
                  ],
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "attributes": {
                  "required": false,
                  "default": [],
                  "description": "core\/tag-cloud\u533a\u5757\u7684\u5c5e\u6027",
                  "type": "object"
                },
                "post_id": {
                  "required": false,
                  "description": "\u6587\u7ae0\u4e0a\u4e0b\u6587\u7684ID\u3002",
                  "type": "integer"
                }
              }
            }
          ]
        },
        "\/wp\/v2\/settings": {
          "namespace": "wp\/v2",
          "methods": [
            "GET",
            "POST",
            "PUT",
            "PATCH"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": []
            },
            {
              "methods": [
                "POST",
                "PUT",
                "PATCH"
              ],
              "args": {
                "title": {
                  "required": false,
                  "description": "\u7ad9\u70b9\u6807\u9898\u3002",
                  "type": "string"
                },
                "description": {
                  "required": false,
                  "description": "\u7ad9\u70b9\u526f\u6807\u9898\u3002",
                  "type": "string"
                },
                "url": {
                  "required": false,
                  "description": "\u7ad9\u70b9URL\u3002",
                  "type": "string"
                },
                "email": {
                  "required": false,
                  "description": "\u6b64\u5730\u5740\u88ab\u7528\u4f5c\u7ba1\u7406\u7528\u9014\uff0c\u5982\u65b0\u7528\u6237\u901a\u77e5\u3002",
                  "type": "string"
                },
                "timezone": {
                  "required": false,
                  "description": "\u548c\u60a8\u5728\u540c\u4e00\u4e2a\u65f6\u533a\u7684\u57ce\u5e02\u3002",
                  "type": "string"
                },
                "date_format": {
                  "required": false,
                  "description": "\u5bf9\u6240\u6709\u65e5\u671f\u5b57\u7b26\u4e32\u9002\u7528\u7684\u65e5\u671f\u683c\u5f0f\u3002",
                  "type": "string"
                },
                "time_format": {
                  "required": false,
                  "description": "\u5bf9\u6240\u6709\u65f6\u95f4\u5b57\u7b26\u4e32\u9002\u7528\u7684\u65f6\u95f4\u683c\u5f0f\u3002",
                  "type": "string"
                },
                "start_of_week": {
                  "required": false,
                  "description": "\u4e00\u5468\u4ece\u5468\u51e0\u5f00\u59cb\u3002",
                  "type": "integer"
                },
                "language": {
                  "required": false,
                  "description": "WordPress\u5730\u533a\u4ee3\u7801\u3002",
                  "type": "string"
                },
                "use_smilies": {
                  "required": false,
                  "description": "\u5c06\u8868\u60c5\u7b26\u53f7\u5982:-)\u548c:-P\u8f6c\u6362\u4e3a\u56fe\u7247\u663e\u793a\u3002",
                  "type": "boolean"
                },
                "default_category": {
                  "required": false,
                  "description": "\u9ed8\u8ba4\u6587\u7ae0\u7c7b\u522b\u3002",
                  "type": "integer"
                },
                "default_post_format": {
                  "required": false,
                  "description": "\u9ed8\u8ba4\u6587\u7ae0\u683c\u5f0f\u3002",
                  "type": "string"
                },
                "posts_per_page": {
                  "required": false,
                  "description": "\u6700\u591a\u663e\u793a\u7684\u535a\u5ba2\u9875\u9762\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "default_ping_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5141\u8bb8\u5176\u4ed6\u535a\u5ba2\u53d1\u9001\u94fe\u63a5\u901a\u77e5\uff08pingback\u548ctrackback\uff09\u5230\u65b0\u6587\u7ae0\u3002",
                  "type": "string"
                },
                "default_comment_status": {
                  "required": false,
                  "enum": [
                    "open",
                    "closed"
                  ],
                  "description": "\u5141\u8bb8\u4ed6\u4eba\u5728\u65b0\u6587\u7ae0\u4e0a\u53d1\u8868\u8bc4\u8bba\u3002",
                  "type": "string"
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/settings"
          }
        },
        "\/wp\/v2\/themes": {
          "namespace": "wp\/v2",
          "methods": [
            "GET"
          ],
          "endpoints": [
            {
              "methods": [
                "GET"
              ],
              "args": {
                "context": {
                  "required": false,
                  "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                  "type": "string"
                },
                "page": {
                  "required": false,
                  "default": 1,
                  "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                  "type": "integer"
                },
                "per_page": {
                  "required": false,
                  "default": 10,
                  "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                  "type": "integer"
                },
                "search": {
                  "required": false,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                  "type": "string"
                },
                "status": {
                  "required": true,
                  "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u6307\u5b9a\u4e86\u4e00\u4e2a\u6216\u591a\u4e2a\u72b6\u6001\u7684\u4e3b\u9898\u3002",
                  "type": "array",
                  "items": {
                    "enum": [
                      "active"
                    ],
                    "type": "string"
                  }
                }
              }
            }
          ],
          "_links": {
            "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/themes"
          }
        }
      },
      "_links": {
        "help": [
          {
            "href": "http:\/\/v2.wp-api.org\/"
          }
        ]
      }
    },
    "headers": []
  },
  "\/wp\/v2\/types?context=edit": {
    "body": {
      "post": {
        "capabilities": {
          "edit_post": "edit_post",
          "read_post": "read_post",
          "delete_post": "delete_post",
          "edit_posts": "edit_posts",
          "edit_others_posts": "edit_others_posts",
          "publish_posts": "publish_posts",
          "read_private_posts": "read_private_posts",
          "read": "read",
          "delete_posts": "delete_posts",
          "delete_private_posts": "delete_private_posts",
          "delete_published_posts": "delete_published_posts",
          "delete_others_posts": "delete_others_posts",
          "edit_private_posts": "edit_private_posts",
          "edit_published_posts": "edit_published_posts",
          "create_posts": "edit_posts"
        },
        "description": "",
        "hierarchical": false,
        "viewable": true,
        "labels": {
          "name": "\u6587\u7ae0",
          "singular_name": "\u6587\u7ae0",
          "add_new": "\u5199\u6587\u7ae0",
          "add_new_item": "\u64b0\u5199\u65b0\u6587\u7ae0",
          "edit_item": "\u7f16\u8f91\u6587\u7ae0",
          "new_item": "\u5199\u6587\u7ae0",
          "view_item": "\u67e5\u770b\u6587\u7ae0",
          "view_items": "\u67e5\u770b\u6587\u7ae0",
          "search_items": "\u641c\u7d22\u6587\u7ae0",
          "not_found": "\u672a\u627e\u5230\u6587\u7ae0\u3002",
          "not_found_in_trash": "\u56de\u6536\u7ad9\u4e2d\u6ca1\u6709\u6587\u7ae0\u3002",
          "parent_item_colon": null,
          "all_items": "\u6240\u6709\u6587\u7ae0",
          "archives": "\u6587\u7ae0\u5b58\u6863",
          "attributes": "\u9875\u9762\u5c5e\u6027",
          "insert_into_item": "\u63d2\u5165\u81f3\u6587\u7ae0",
          "uploaded_to_this_item": "\u4e0a\u4f20\u5230\u672c\u6587\u7ae0\u7684",
          "featured_image": "\u7279\u8272\u56fe\u7247",
          "set_featured_image": "\u8bbe\u7f6e\u7279\u8272\u56fe\u7247",
          "remove_featured_image": "\u53d6\u6d88\u7279\u8272\u56fe\u7247",
          "use_featured_image": "\u8bbe\u7f6e\u4e3a\u7279\u8272\u56fe\u7247",
          "filter_items_list": "\u8fc7\u6ee4\u6587\u7ae0\u5217\u8868",
          "items_list_navigation": "\u6587\u7ae0\u5217\u8868\u5bfc\u822a",
          "items_list": "\u6587\u7ae0\u5217\u8868",
          "item_published": "\u6587\u7ae0\u5df2\u53d1\u5e03\u3002",
          "item_published_privately": "\u6587\u7ae0\u5df2\u79c1\u5bc6\u53d1\u5e03\u3002",
          "item_reverted_to_draft": "\u6587\u7ae0\u5df2\u6062\u590d\u4e3a\u8349\u7a3f\u3002",
          "item_scheduled": "\u6587\u7ae0\u5df2\u8ba1\u5212\u3002",
          "item_updated": "\u6587\u7ae0\u5df2\u66f4\u65b0\u3002",
          "menu_name": "\u6587\u7ae0",
          "name_admin_bar": "\u6587\u7ae0"
        },
        "name": "\u6587\u7ae0",
        "slug": "post",
        "supports": {
          "title": true,
          "editor": true,
          "author": true,
          "thumbnail": true,
          "excerpt": true,
          "trackbacks": true,
          "custom-fields": true,
          "comments": true,
          "revisions": true,
          "post-formats": true
        },
        "taxonomies": [
          "category",
          "post_tag"
        ],
        "rest_base": "posts",
        "_links": {
          "collection": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/types"
            }
          ],
          "wp:items": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts"
            }
          ],
          "curies": [
            {
              "name": "wp",
              "href": "https:\/\/api.w.org\/{rel}",
              "templated": true
            }
          ]
        }
      },
      "page": {
        "capabilities": {
          "edit_post": "edit_page",
          "read_post": "read_page",
          "delete_post": "delete_page",
          "edit_posts": "edit_pages",
          "edit_others_posts": "edit_others_pages",
          "publish_posts": "publish_pages",
          "read_private_posts": "read_private_pages",
          "read": "read",
          "delete_posts": "delete_pages",
          "delete_private_posts": "delete_private_pages",
          "delete_published_posts": "delete_published_pages",
          "delete_others_posts": "delete_others_pages",
          "edit_private_posts": "edit_private_pages",
          "edit_published_posts": "edit_published_pages",
          "create_posts": "edit_pages"
        },
        "description": "",
        "hierarchical": true,
        "viewable": true,
        "labels": {
          "name": "\u9875\u9762",
          "singular_name": "\u9875\u9762",
          "add_new": "\u65b0\u5efa\u9875\u9762",
          "add_new_item": "\u521b\u5efa\u9875\u9762",
          "edit_item": "\u7f16\u8f91\u9875\u9762",
          "new_item": "\u65b0\u5efa\u9875\u9762",
          "view_item": "\u67e5\u770b\u9875\u9762",
          "view_items": "\u67e5\u770b\u9875\u9762",
          "search_items": "\u641c\u7d22\u9875\u9762",
          "not_found": "\u672a\u627e\u5230\u9875\u9762\u3002",
          "not_found_in_trash": "\u56de\u6536\u7ad9\u4e2d\u6ca1\u6709\u9875\u9762\u3002",
          "parent_item_colon": "\u7236\u9875\uff1a",
          "all_items": "\u6240\u6709\u9875\u9762",
          "archives": "\u9875\u9762\u5b58\u6863",
          "attributes": "\u9875\u9762\u5c5e\u6027",
          "insert_into_item": "\u63d2\u5165\u81f3\u9875\u9762",
          "uploaded_to_this_item": "\u4e0a\u4f20\u5230\u672c\u9875\u9762\u7684",
          "featured_image": "\u7279\u8272\u56fe\u7247",
          "set_featured_image": "\u8bbe\u7f6e\u7279\u8272\u56fe\u7247",
          "remove_featured_image": "\u53d6\u6d88\u7279\u8272\u56fe\u7247",
          "use_featured_image": "\u7528\u4f5c\u7279\u8272\u56fe\u7247",
          "filter_items_list": "\u8fc7\u6ee4\u9875\u9762\u5217\u8868",
          "items_list_navigation": "\u9875\u9762\u5217\u8868\u5bfc\u822a",
          "items_list": "\u9875\u9762\u5217\u8868",
          "item_published": "\u9875\u9762\u5df2\u53d1\u5e03\u3002",
          "item_published_privately": "\u9875\u9762\u5df2\u79c1\u5bc6\u53d1\u5e03\u3002",
          "item_reverted_to_draft": "\u9875\u9762\u5df2\u6062\u590d\u4e3a\u8349\u7a3f\u3002",
          "item_scheduled": "\u9875\u9762\u5df2\u8ba1\u5212\u3002",
          "item_updated": "\u9875\u9762\u5df2\u66f4\u65b0\u3002",
          "menu_name": "\u9875\u9762",
          "name_admin_bar": "\u9875\u9762"
        },
        "name": "\u9875\u9762",
        "slug": "page",
        "supports": {
          "title": true,
          "editor": true,
          "author": true,
          "thumbnail": true,
          "page-attributes": true,
          "custom-fields": true,
          "comments": true,
          "revisions": true
        },
        "taxonomies": [],
        "rest_base": "pages",
        "_links": {
          "collection": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/types"
            }
          ],
          "wp:items": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/pages"
            }
          ],
          "curies": [
            {
              "name": "wp",
              "href": "https:\/\/api.w.org\/{rel}",
              "templated": true
            }
          ]
        }
      },
      "attachment": {
        "capabilities": {
          "edit_post": "edit_post",
          "read_post": "read_post",
          "delete_post": "delete_post",
          "edit_posts": "edit_posts",
          "edit_others_posts": "edit_others_posts",
          "publish_posts": "publish_posts",
          "read_private_posts": "read_private_posts",
          "read": "read",
          "delete_posts": "delete_posts",
          "delete_private_posts": "delete_private_posts",
          "delete_published_posts": "delete_published_posts",
          "delete_others_posts": "delete_others_posts",
          "edit_private_posts": "edit_private_posts",
          "edit_published_posts": "edit_published_posts",
          "create_posts": "upload_files"
        },
        "description": "",
        "hierarchical": false,
        "viewable": true,
        "labels": {
          "name": "\u5a92\u4f53",
          "singular_name": "\u5a92\u4f53",
          "add_new": "\u6dfb\u52a0",
          "add_new_item": "\u64b0\u5199\u65b0\u6587\u7ae0",
          "edit_item": "\u7f16\u8f91\u5a92\u4f53",
          "new_item": "\u5199\u6587\u7ae0",
          "view_item": "\u8bbf\u95ee\u9644\u4ef6\u9875\u9762",
          "view_items": "\u67e5\u770b\u6587\u7ae0",
          "search_items": "\u641c\u7d22\u6587\u7ae0",
          "not_found": "\u672a\u627e\u5230\u6587\u7ae0\u3002",
          "not_found_in_trash": "\u56de\u6536\u7ad9\u4e2d\u6ca1\u6709\u6587\u7ae0\u3002",
          "parent_item_colon": null,
          "all_items": "\u5a92\u4f53",
          "archives": "\u5a92\u4f53",
          "attributes": "\u9644\u4ef6\u5c5e\u6027",
          "insert_into_item": "\u63d2\u5165\u81f3\u6587\u7ae0",
          "uploaded_to_this_item": "\u4e0a\u4f20\u5230\u672c\u6587\u7ae0\u7684",
          "featured_image": "\u7279\u8272\u56fe\u7247",
          "set_featured_image": "\u8bbe\u7f6e\u7279\u8272\u56fe\u7247",
          "remove_featured_image": "\u53d6\u6d88\u7279\u8272\u56fe\u7247",
          "use_featured_image": "\u8bbe\u7f6e\u4e3a\u7279\u8272\u56fe\u7247",
          "filter_items_list": "\u8fc7\u6ee4\u6587\u7ae0\u5217\u8868",
          "items_list_navigation": "\u6587\u7ae0\u5217\u8868\u5bfc\u822a",
          "items_list": "\u6587\u7ae0\u5217\u8868",
          "item_published": "\u6587\u7ae0\u5df2\u53d1\u5e03\u3002",
          "item_published_privately": "\u6587\u7ae0\u5df2\u79c1\u5bc6\u53d1\u5e03\u3002",
          "item_reverted_to_draft": "\u6587\u7ae0\u5df2\u6062\u590d\u4e3a\u8349\u7a3f\u3002",
          "item_scheduled": "\u6587\u7ae0\u5df2\u8ba1\u5212\u3002",
          "item_updated": "\u6587\u7ae0\u5df2\u66f4\u65b0\u3002",
          "menu_name": "\u5a92\u4f53",
          "name_admin_bar": "\u5a92\u4f53"
        },
        "name": "\u5a92\u4f53",
        "slug": "attachment",
        "supports": {
          "title": true,
          "author": true,
          "comments": true
        },
        "taxonomies": [],
        "rest_base": "media",
        "_links": {
          "collection": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/types"
            }
          ],
          "wp:items": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/media"
            }
          ],
          "curies": [
            {
              "name": "wp",
              "href": "https:\/\/api.w.org\/{rel}",
              "templated": true
            }
          ]
        }
      },
      "wp_block": {
        "capabilities": {
          "edit_post": "edit_block",
          "read_post": "read_block",
          "delete_post": "delete_block",
          "edit_posts": "edit_posts",
          "edit_others_posts": "edit_others_posts",
          "publish_posts": "publish_blocks",
          "read_private_posts": "read_private_blocks",
          "read": "edit_posts",
          "delete_posts": "delete_blocks",
          "delete_private_posts": "delete_private_blocks",
          "delete_published_posts": "delete_published_posts",
          "delete_others_posts": "delete_others_posts",
          "edit_private_posts": "edit_private_blocks",
          "edit_published_posts": "edit_published_posts",
          "create_posts": "publish_posts"
        },
        "description": "",
        "hierarchical": false,
        "viewable": false,
        "labels": {
          "name": "\u533a\u5757",
          "singular_name": "\u533a\u5757",
          "add_new": "\u6dfb\u52a0\u65b0",
          "add_new_item": "\u6dfb\u52a0\u65b0\u533a\u5757",
          "edit_item": "\u7f16\u8f91\u533a\u5757",
          "new_item": "\u65b0\u533a\u5757",
          "view_item": "\u67e5\u770b\u533a\u5757",
          "view_items": "\u67e5\u770b\u6587\u7ae0",
          "search_items": "\u641c\u7d22\u533a\u5757",
          "not_found": "\u672a\u627e\u5230\u533a\u5757\u3002",
          "not_found_in_trash": "\u56de\u6536\u7ad9\u4e2d\u6ca1\u6709\u533a\u5757\u3002",
          "parent_item_colon": null,
          "all_items": "\u5168\u90e8\u533a\u5757",
          "archives": "\u5168\u90e8\u533a\u5757",
          "attributes": "\u9875\u9762\u5c5e\u6027",
          "insert_into_item": "\u63d2\u5165\u81f3\u6587\u7ae0",
          "uploaded_to_this_item": "\u4e0a\u4f20\u5230\u672c\u6587\u7ae0\u7684",
          "featured_image": "\u7279\u8272\u56fe\u7247",
          "set_featured_image": "\u8bbe\u7f6e\u7279\u8272\u56fe\u7247",
          "remove_featured_image": "\u53d6\u6d88\u7279\u8272\u56fe\u7247",
          "use_featured_image": "\u8bbe\u7f6e\u4e3a\u7279\u8272\u56fe\u7247",
          "filter_items_list": "\u8fc7\u6ee4\u533a\u5757\u5217\u8868",
          "items_list_navigation": "\u533a\u5757\u5217\u8868\u5bfc\u822a",
          "items_list": "\u533a\u5757\u5217\u8868",
          "item_published": "\u533a\u5757\u5df2\u53d1\u5e03\u3002",
          "item_published_privately": "\u533a\u5757\u5df2\u79c1\u5bc6\u53d1\u5e03\u3002",
          "item_reverted_to_draft": "\u533a\u5757\u5df2\u6062\u590d\u4e3a\u8349\u7a3f\u3002",
          "item_scheduled": "\u533a\u5757\u5df2\u8ba1\u5212\u3002",
          "item_updated": "\u533a\u5757\u5df2\u66f4\u65b0\u3002",
          "menu_name": "\u533a\u5757",
          "name_admin_bar": "\u533a\u5757"
        },
        "name": "\u533a\u5757",
        "slug": "wp_block",
        "supports": {
          "title": true,
          "editor": true
        },
        "taxonomies": [],
        "rest_base": "blocks",
        "_links": {
          "collection": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/types"
            }
          ],
          "wp:items": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/blocks"
            }
          ],
          "curies": [
            {
              "name": "wp",
              "href": "https:\/\/api.w.org\/{rel}",
              "templated": true
            }
          ]
        }
      },
      "wp_area": {
        "capabilities": {
          "edit_post": "edit_post",
          "read_post": "read_post",
          "delete_post": "delete_post",
          "edit_posts": "edit_theme_options",
          "edit_others_posts": "edit_theme_options",
          "publish_posts": "publish_posts",
          "read_private_posts": "read_private_posts",
          "read": "edit_posts",
          "delete_posts": "delete_posts",
          "delete_private_posts": "delete_private_posts",
          "delete_published_posts": "edit_theme_options",
          "delete_others_posts": "edit_theme_options",
          "edit_private_posts": "edit_private_posts",
          "edit_published_posts": "edit_theme_options",
          "create_posts": "edit_theme_options"
        },
        "description": "Experimental custom post type that will store block areas referenced by themes.",
        "hierarchical": false,
        "viewable": false,
        "labels": {
          "name": "Block Area (Experimental)",
          "singular_name": "Block Area (Experimental)",
          "add_new": "Add New",
          "add_new_item": "Add New Block Area",
          "edit_item": "Edit Block Area",
          "new_item": "New Block Area",
          "view_item": "View Block Area",
          "view_items": "\u67e5\u770b\u6587\u7ae0",
          "search_items": "Search Block Areas",
          "not_found": "No block area found.",
          "not_found_in_trash": "No block areas found in Trash.",
          "parent_item_colon": null,
          "all_items": "All Block Areas",
          "archives": "All Block Areas",
          "attributes": "\u9875\u9762\u5c5e\u6027",
          "insert_into_item": "\u63d2\u5165\u81f3\u6587\u7ae0",
          "uploaded_to_this_item": "\u4e0a\u4f20\u5230\u672c\u6587\u7ae0\u7684",
          "featured_image": "\u7279\u8272\u56fe\u7247",
          "set_featured_image": "\u8bbe\u7f6e\u7279\u8272\u56fe\u7247",
          "remove_featured_image": "\u53d6\u6d88\u7279\u8272\u56fe\u7247",
          "use_featured_image": "\u8bbe\u7f6e\u4e3a\u7279\u8272\u56fe\u7247",
          "filter_items_list": "Filter block areas list",
          "items_list_navigation": "Block areas list navigation",
          "items_list": "Block areas list",
          "item_published": "Block area published.",
          "item_published_privately": "Block area published privately.",
          "item_reverted_to_draft": "Block area reverted to draft.",
          "item_scheduled": "Block area scheduled.",
          "item_updated": "Block area updated.",
          "menu_name": "Block Areas",
          "name_admin_bar": "Block Area"
        },
        "name": "Block Area (Experimental)",
        "slug": "wp_area",
        "supports": {
          "title": true,
          "editor": true
        },
        "taxonomies": [],
        "rest_base": "__experimental\/block-areas",
        "_links": {
          "collection": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/types"
            }
          ],
          "wp:items": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/__experimental\/block-areas"
            }
          ],
          "curies": [
            {
              "name": "wp",
              "href": "https:\/\/api.w.org\/{rel}",
              "templated": true
            }
          ]
        }
      }
    },
    "headers": []
  },
  "\/wp\/v2\/taxonomies?per_page=-1&context=edit": {
    "body": {
      "category": {
        "name": "\u5206\u7c7b\u76ee\u5f55",
        "slug": "category",
        "capabilities": {
          "manage_terms": "manage_categories",
          "edit_terms": "edit_categories",
          "delete_terms": "delete_categories",
          "assign_terms": "assign_categories"
        },
        "description": "",
        "labels": {
          "name": "\u5206\u7c7b\u76ee\u5f55",
          "singular_name": "\u5206\u7c7b\u76ee\u5f55",
          "search_items": "\u641c\u7d22\u5206\u7c7b\u76ee\u5f55",
          "popular_items": null,
          "all_items": "\u6240\u6709\u5206\u7c7b\u76ee\u5f55",
          "parent_item": "\u7236\u7ea7\u5206\u7c7b\u76ee\u5f55",
          "parent_item_colon": "\u7236\u7ea7\u5206\u7c7b\u76ee\u5f55\uff1a",
          "edit_item": "\u7f16\u8f91\u5206\u7c7b\u76ee\u5f55",
          "view_item": "\u67e5\u770b\u5206\u7c7b\u76ee\u5f55",
          "update_item": "\u66f4\u65b0\u5206\u7c7b\u76ee\u5f55",
          "add_new_item": "\u6dfb\u52a0\u65b0\u5206\u7c7b\u76ee\u5f55",
          "new_item_name": "\u65b0\u5206\u7c7b\u76ee\u5f55\u540d",
          "separate_items_with_commas": null,
          "add_or_remove_items": null,
          "choose_from_most_used": null,
          "not_found": "\u672a\u627e\u5230\u5206\u7c7b\u3002",
          "no_terms": "\u6ca1\u6709\u5206\u7c7b\u76ee\u5f55",
          "items_list_navigation": "\u5206\u7c7b\u5217\u8868\u5bfc\u822a",
          "items_list": "\u5206\u7c7b\u5217\u8868",
          "most_used": "\u6700\u591a\u4f7f\u7528",
          "back_to_items": "&larr; \u8fd4\u56de\u5206\u7c7b",
          "menu_name": "\u5206\u7c7b\u76ee\u5f55",
          "name_admin_bar": "category"
        },
        "types": [
          "post"
        ],
        "show_cloud": true,
        "hierarchical": true,
        "rest_base": "categories",
        "visibility": {
          "public": true,
          "publicly_queryable": true,
          "show_admin_column": true,
          "show_in_nav_menus": true,
          "show_in_quick_edit": true,
          "show_ui": true
        },
        "_links": {
          "collection": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/taxonomies"
            }
          ],
          "wp:items": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/categories"
            }
          ],
          "curies": [
            {
              "name": "wp",
              "href": "https:\/\/api.w.org\/{rel}",
              "templated": true
            }
          ]
        }
      },
      "post_tag": {
        "name": "\u6807\u7b7e",
        "slug": "post_tag",
        "capabilities": {
          "manage_terms": "manage_post_tags",
          "edit_terms": "edit_post_tags",
          "delete_terms": "delete_post_tags",
          "assign_terms": "assign_post_tags"
        },
        "description": "",
        "labels": {
          "name": "\u6807\u7b7e",
          "singular_name": "\u6807\u7b7e",
          "search_items": "\u641c\u7d22\u6807\u7b7e",
          "popular_items": "\u70ed\u95e8\u6807\u7b7e",
          "all_items": "\u6240\u6709\u6807\u7b7e",
          "parent_item": null,
          "parent_item_colon": null,
          "edit_item": "\u7f16\u8f91\u6807\u7b7e",
          "view_item": "\u67e5\u770b\u6807\u7b7e",
          "update_item": "\u66f4\u65b0\u6807\u7b7e",
          "add_new_item": "\u6dfb\u52a0\u65b0\u6807\u7b7e",
          "new_item_name": "\u65b0\u6807\u7b7e\u540d",
          "separate_items_with_commas": "\u591a\u4e2a\u6807\u7b7e\u8bf7\u7528\u82f1\u6587\u9017\u53f7\uff08,\uff09\u5206\u5f00",
          "add_or_remove_items": "\u6dfb\u52a0\u6216\u5220\u9664\u6807\u7b7e",
          "choose_from_most_used": "\u4ece\u5e38\u7528\u6807\u7b7e\u4e2d\u9009\u62e9",
          "not_found": "\u672a\u627e\u5230\u6807\u7b7e\u3002",
          "no_terms": "\u6ca1\u6709\u6807\u7b7e",
          "items_list_navigation": "\u6807\u7b7e\u5217\u8868\u5bfc\u822a",
          "items_list": "\u6807\u7b7e\u5217\u8868",
          "most_used": "\u6700\u591a\u4f7f\u7528",
          "back_to_items": "&larr; \u8fd4\u56de\u6807\u7b7e",
          "menu_name": "\u6807\u7b7e",
          "name_admin_bar": "post_tag"
        },
        "types": [
          "post"
        ],
        "show_cloud": true,
        "hierarchical": false,
        "rest_base": "tags",
        "visibility": {
          "public": true,
          "publicly_queryable": true,
          "show_admin_column": true,
          "show_in_nav_menus": true,
          "show_in_quick_edit": true,
          "show_ui": true
        },
        "_links": {
          "collection": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/taxonomies"
            }
          ],
          "wp:items": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/tags"
            }
          ],
          "curies": [
            {
              "name": "wp",
              "href": "https:\/\/api.w.org\/{rel}",
              "templated": true
            }
          ]
        }
      }
    },
    "headers": []
  },
  "\/wp\/v2\/taxonomies?context=edit&per_page=-1": {
    "body": {
      "category": {
        "name": "\u5206\u7c7b\u76ee\u5f55",
        "slug": "category",
        "capabilities": {
          "manage_terms": "manage_categories",
          "edit_terms": "edit_categories",
          "delete_terms": "delete_categories",
          "assign_terms": "assign_categories"
        },
        "description": "",
        "labels": {
          "name": "\u5206\u7c7b\u76ee\u5f55",
          "singular_name": "\u5206\u7c7b\u76ee\u5f55",
          "search_items": "\u641c\u7d22\u5206\u7c7b\u76ee\u5f55",
          "popular_items": null,
          "all_items": "\u6240\u6709\u5206\u7c7b\u76ee\u5f55",
          "parent_item": "\u7236\u7ea7\u5206\u7c7b\u76ee\u5f55",
          "parent_item_colon": "\u7236\u7ea7\u5206\u7c7b\u76ee\u5f55\uff1a",
          "edit_item": "\u7f16\u8f91\u5206\u7c7b\u76ee\u5f55",
          "view_item": "\u67e5\u770b\u5206\u7c7b\u76ee\u5f55",
          "update_item": "\u66f4\u65b0\u5206\u7c7b\u76ee\u5f55",
          "add_new_item": "\u6dfb\u52a0\u65b0\u5206\u7c7b\u76ee\u5f55",
          "new_item_name": "\u65b0\u5206\u7c7b\u76ee\u5f55\u540d",
          "separate_items_with_commas": null,
          "add_or_remove_items": null,
          "choose_from_most_used": null,
          "not_found": "\u672a\u627e\u5230\u5206\u7c7b\u3002",
          "no_terms": "\u6ca1\u6709\u5206\u7c7b\u76ee\u5f55",
          "items_list_navigation": "\u5206\u7c7b\u5217\u8868\u5bfc\u822a",
          "items_list": "\u5206\u7c7b\u5217\u8868",
          "most_used": "\u6700\u591a\u4f7f\u7528",
          "back_to_items": "&larr; \u8fd4\u56de\u5206\u7c7b",
          "menu_name": "\u5206\u7c7b\u76ee\u5f55",
          "name_admin_bar": "category"
        },
        "types": [
          "post"
        ],
        "show_cloud": true,
        "hierarchical": true,
        "rest_base": "categories",
        "visibility": {
          "public": true,
          "publicly_queryable": true,
          "show_admin_column": true,
          "show_in_nav_menus": true,
          "show_in_quick_edit": true,
          "show_ui": true
        },
        "_links": {
          "collection": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/taxonomies"
            }
          ],
          "wp:items": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/categories"
            }
          ],
          "curies": [
            {
              "name": "wp",
              "href": "https:\/\/api.w.org\/{rel}",
              "templated": true
            }
          ]
        }
      },
      "post_tag": {
        "name": "\u6807\u7b7e",
        "slug": "post_tag",
        "capabilities": {
          "manage_terms": "manage_post_tags",
          "edit_terms": "edit_post_tags",
          "delete_terms": "delete_post_tags",
          "assign_terms": "assign_post_tags"
        },
        "description": "",
        "labels": {
          "name": "\u6807\u7b7e",
          "singular_name": "\u6807\u7b7e",
          "search_items": "\u641c\u7d22\u6807\u7b7e",
          "popular_items": "\u70ed\u95e8\u6807\u7b7e",
          "all_items": "\u6240\u6709\u6807\u7b7e",
          "parent_item": null,
          "parent_item_colon": null,
          "edit_item": "\u7f16\u8f91\u6807\u7b7e",
          "view_item": "\u67e5\u770b\u6807\u7b7e",
          "update_item": "\u66f4\u65b0\u6807\u7b7e",
          "add_new_item": "\u6dfb\u52a0\u65b0\u6807\u7b7e",
          "new_item_name": "\u65b0\u6807\u7b7e\u540d",
          "separate_items_with_commas": "\u591a\u4e2a\u6807\u7b7e\u8bf7\u7528\u82f1\u6587\u9017\u53f7\uff08,\uff09\u5206\u5f00",
          "add_or_remove_items": "\u6dfb\u52a0\u6216\u5220\u9664\u6807\u7b7e",
          "choose_from_most_used": "\u4ece\u5e38\u7528\u6807\u7b7e\u4e2d\u9009\u62e9",
          "not_found": "\u672a\u627e\u5230\u6807\u7b7e\u3002",
          "no_terms": "\u6ca1\u6709\u6807\u7b7e",
          "items_list_navigation": "\u6807\u7b7e\u5217\u8868\u5bfc\u822a",
          "items_list": "\u6807\u7b7e\u5217\u8868",
          "most_used": "\u6700\u591a\u4f7f\u7528",
          "back_to_items": "&larr; \u8fd4\u56de\u6807\u7b7e",
          "menu_name": "\u6807\u7b7e",
          "name_admin_bar": "post_tag"
        },
        "types": [
          "post"
        ],
        "show_cloud": true,
        "hierarchical": false,
        "rest_base": "tags",
        "visibility": {
          "public": true,
          "publicly_queryable": true,
          "show_admin_column": true,
          "show_in_nav_menus": true,
          "show_in_quick_edit": true,
          "show_ui": true
        },
        "_links": {
          "collection": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/taxonomies"
            }
          ],
          "wp:items": [
            {
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/tags"
            }
          ],
          "curies": [
            {
              "name": "wp",
              "href": "https:\/\/api.w.org\/{rel}",
              "templated": true
            }
          ]
        }
      }
    },
    "headers": []
  },
  "\/wp\/v2\/themes?status=active": {
    "body": [
      {
        "theme_supports": {
          "formats": [
            "standard"
          ],
          "post-thumbnails": true,
          "responsive-embeds": true
        }
      }
    ],
    "headers": {
      "X-WP-Total": 1,
      "X-WP-TotalPages": 1
    }
  },
  "\/wp\/v2\/posts\/28?context=edit": {
    "body": {
      "id": 28,
      "date": "2019-11-07T10:59:14",
      "date_gmt": "2019-11-07T02:59:14",
      "guid": {
        "rendered": "http:\/\/wp.preferr.ilovelook.cn\/?p=28",
        "raw": "http:\/\/wp.preferr.ilovelook.cn\/?p=28"
      },
      "modified": "2019-11-07T10:59:14",
      "modified_gmt": "2019-11-07T02:59:14",
      "password": "",
      "slug": "",
      "status": "auto-draft",
      "type": "post",
      "link": "http:\/\/wp.preferr.ilovelook.cn\/?p=28",
      "title": {
        "raw": "\u81ea\u52a8\u8349\u7a3f",
        "rendered": "\u81ea\u52a8\u8349\u7a3f"
      },
      "content": {
        "raw": "",
        "rendered": "",
        "protected": false,
        "block_version": 0
      },
      "excerpt": {
        "raw": "",
        "rendered": "",
        "protected": false
      },
      "author": 1,
      "featured_media": 0,
      "comment_status": "open",
      "ping_status": "open",
      "sticky": false,
      "template": "",
      "format": "standard",
      "meta": [],
      "categories": [],
      "tags": [],
      "permalink_template": "http:\/\/wp.preferr.ilovelook.cn\/?p=28",
      "generated_slug": "\u81ea\u52a8\u8349\u7a3f",
      "_links": {
        "self": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts\/28"
          }
        ],
        "collection": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts"
          }
        ],
        "about": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/types\/post"
          }
        ],
        "author": [
          {
            "embeddable": true,
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/users\/1"
          }
        ],
        "replies": [
          {
            "embeddable": true,
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/comments?post=28"
          }
        ],
        "version-history": [
          {
            "count": 0,
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts\/28\/revisions"
          }
        ],
        "wp:attachment": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/media?parent=28"
          }
        ],
        "wp:term": [
          {
            "taxonomy": "category",
            "embeddable": true,
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/categories?post=28"
          },
          {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/tags?post=28"
          }
        ],
        "wp:action-publish": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts\/28"
          }
        ],
        "wp:action-unfiltered-html": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts\/28"
          }
        ],
        "wp:action-sticky": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts\/28"
          }
        ],
        "wp:action-assign-author": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts\/28"
          }
        ],
        "wp:action-create-categories": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts\/28"
          }
        ],
        "wp:action-assign-categories": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts\/28"
          }
        ],
        "wp:action-create-tags": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts\/28"
          }
        ],
        "wp:action-assign-tags": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts\/28"
          }
        ],
        "curies": [
          {
            "name": "wp",
            "href": "https:\/\/api.w.org\/{rel}",
            "templated": true
          }
        ]
      }
    },
    "headers": {
      "Link": "<http:\/\/wp.preferr.ilovelook.cn\/?p=28>; rel=\"alternate\"; type=text\/html"
    }
  },
  "\/wp\/v2\/users\/me": {
    "body": {
      "id": 1,
      "username": "wordpress",
      "name": "wordpress",
      "first_name": "",
      "last_name": "",
      "email": "yuan@yzyw-inc.com",
      "url": "",
      "description": "",
      "link": "http:\/\/wp.preferr.ilovelook.cn\/author\/wordpress\/",
      "locale": "zh_CN",
      "nickname": "wordpress",
      "slug": "wordpress",
      "roles": [
        "administrator"
      ],
      "registered_date": "2019-10-09T03:40:25+00:00",
      "capabilities": {
        "switch_themes": true,
        "edit_themes": true,
        "activate_plugins": true,
        "edit_plugins": true,
        "edit_users": true,
        "edit_files": true,
        "manage_options": true,
        "moderate_comments": true,
        "manage_categories": true,
        "manage_links": true,
        "upload_files": true,
        "import": true,
        "unfiltered_html": true,
        "edit_posts": true,
        "edit_others_posts": true,
        "edit_published_posts": true,
        "publish_posts": true,
        "edit_pages": true,
        "read": true,
        "level_10": true,
        "level_9": true,
        "level_8": true,
        "level_7": true,
        "level_6": true,
        "level_5": true,
        "level_4": true,
        "level_3": true,
        "level_2": true,
        "level_1": true,
        "level_0": true,
        "edit_others_pages": true,
        "edit_published_pages": true,
        "publish_pages": true,
        "delete_pages": true,
        "delete_others_pages": true,
        "delete_published_pages": true,
        "delete_posts": true,
        "delete_others_posts": true,
        "delete_published_posts": true,
        "delete_private_posts": true,
        "edit_private_posts": true,
        "read_private_posts": true,
        "delete_private_pages": true,
        "edit_private_pages": true,
        "read_private_pages": true,
        "delete_users": true,
        "create_users": true,
        "unfiltered_upload": true,
        "edit_dashboard": true,
        "update_plugins": true,
        "delete_plugins": true,
        "install_plugins": true,
        "update_themes": true,
        "install_themes": true,
        "update_core": true,
        "list_users": true,
        "remove_users": true,
        "promote_users": true,
        "edit_theme_options": true,
        "delete_themes": true,
        "export": true,
        "block_lab_edit_block": true,
        "block_lab_edit_blocks": true,
        "block_lab_edit_others_blocks": true,
        "block_lab_publish_blocks": true,
        "block_lab_read_block": true,
        "block_lab_read_private_blocks": true,
        "block_lab_delete_block": true,
        "administrator": true
      },
      "extra_capabilities": {
        "administrator": true
      },
      "avatar_urls": {
        "24": "http:\/\/2.gravatar.com\/avatar\/eae60811a8ebdc6b8242cdf1542a4ae9?s=24&d=mm&r=g",
        "48": "http:\/\/2.gravatar.com\/avatar\/eae60811a8ebdc6b8242cdf1542a4ae9?s=48&d=mm&r=g",
        "96": "http:\/\/2.gravatar.com\/avatar\/eae60811a8ebdc6b8242cdf1542a4ae9?s=96&d=mm&r=g"
      },
      "meta": [],
      "_links": {
        "self": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/users\/1"
          }
        ],
        "collection": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/users"
          }
        ]
      }
    },
    "headers": []
  },
  "/wp/v2/users/?per_page=-1&who=authors": {
    "body": [],
    "headers": []
  },
  "/wp/v2/users/?who=authors&per_page=-1": {
    "body": [],
    "headers": []
  },
  "\/wp\/v2\/types\/post?context=edit": {
    "body": {
      "capabilities": {
        "edit_post": "edit_post",
        "read_post": "read_post",
        "delete_post": "delete_post",
        "edit_posts": "edit_posts",
        "edit_others_posts": "edit_others_posts",
        "publish_posts": "publish_posts",
        "read_private_posts": "read_private_posts",
        "read": "read",
        "delete_posts": "delete_posts",
        "delete_private_posts": "delete_private_posts",
        "delete_published_posts": "delete_published_posts",
        "delete_others_posts": "delete_others_posts",
        "edit_private_posts": "edit_private_posts",
        "edit_published_posts": "edit_published_posts",
        "create_posts": "edit_posts"
      },
      "description": "",
      "hierarchical": false,
      "viewable": true,
      "labels": {
        "name": "\u6587\u7ae0",
        "singular_name": "\u6587\u7ae0",
        "add_new": "\u5199\u6587\u7ae0",
        "add_new_item": "\u64b0\u5199\u65b0\u6587\u7ae0",
        "edit_item": "\u7f16\u8f91\u6587\u7ae0",
        "new_item": "\u5199\u6587\u7ae0",
        "view_item": "\u67e5\u770b\u6587\u7ae0",
        "view_items": "\u67e5\u770b\u6587\u7ae0",
        "search_items": "\u641c\u7d22\u6587\u7ae0",
        "not_found": "\u672a\u627e\u5230\u6587\u7ae0\u3002",
        "not_found_in_trash": "\u56de\u6536\u7ad9\u4e2d\u6ca1\u6709\u6587\u7ae0\u3002",
        "parent_item_colon": null,
        "all_items": "\u6240\u6709\u6587\u7ae0",
        "archives": "\u6587\u7ae0\u5b58\u6863",
        "attributes": "\u9875\u9762\u5c5e\u6027",
        "insert_into_item": "\u63d2\u5165\u81f3\u6587\u7ae0",
        "uploaded_to_this_item": "\u4e0a\u4f20\u5230\u672c\u6587\u7ae0\u7684",
        "featured_image": "\u7279\u8272\u56fe\u7247",
        "set_featured_image": "\u8bbe\u7f6e\u7279\u8272\u56fe\u7247",
        "remove_featured_image": "\u53d6\u6d88\u7279\u8272\u56fe\u7247",
        "use_featured_image": "\u8bbe\u7f6e\u4e3a\u7279\u8272\u56fe\u7247",
        "filter_items_list": "\u8fc7\u6ee4\u6587\u7ae0\u5217\u8868",
        "items_list_navigation": "\u6587\u7ae0\u5217\u8868\u5bfc\u822a",
        "items_list": "\u6587\u7ae0\u5217\u8868",
        "item_published": "\u6587\u7ae0\u5df2\u53d1\u5e03\u3002",
        "item_published_privately": "\u6587\u7ae0\u5df2\u79c1\u5bc6\u53d1\u5e03\u3002",
        "item_reverted_to_draft": "\u6587\u7ae0\u5df2\u6062\u590d\u4e3a\u8349\u7a3f\u3002",
        "item_scheduled": "\u6587\u7ae0\u5df2\u8ba1\u5212\u3002",
        "item_updated": "\u6587\u7ae0\u5df2\u66f4\u65b0\u3002",
        "menu_name": "\u6587\u7ae0",
        "name_admin_bar": "\u6587\u7ae0"
      },
      "name": "\u6587\u7ae0",
      "slug": "post",
      "supports": {
        "title": true,
        "editor": true,
        "author": true,
        "thumbnail": true,
        "excerpt": true,
        "trackbacks": true,
        "custom-fields": true,
        "comments": true,
        "revisions": true,
        "post-formats": true
      },
      "taxonomies": [
        "category",
        "post_tag"
      ],
      "rest_base": "posts",
      "_links": {
        "collection": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/types"
          }
        ],
        "wp:items": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/posts"
          }
        ],
        "curies": [
          {
            "name": "wp",
            "href": "https:\/\/api.w.org\/{rel}",
            "templated": true
          }
        ]
      }
    },
    "headers": []
  },
  "\/wp\/v2\/users\/me?post_type=post&context=edit": {
    "body": {
      "id": 1,
      "username": "wordpress",
      "name": "wordpress",
      "first_name": "",
      "last_name": "",
      "email": "yuan@yzyw-inc.com",
      "url": "",
      "description": "",
      "link": "http:\/\/wp.preferr.ilovelook.cn\/author\/wordpress\/",
      "locale": "zh_CN",
      "nickname": "wordpress",
      "slug": "wordpress",
      "roles": [
        "administrator"
      ],
      "registered_date": "2019-10-09T03:40:25+00:00",
      "capabilities": {
        "switch_themes": true,
        "edit_themes": true,
        "activate_plugins": true,
        "edit_plugins": true,
        "edit_users": true,
        "edit_files": true,
        "manage_options": true,
        "moderate_comments": true,
        "manage_categories": true,
        "manage_links": true,
        "upload_files": true,
        "import": true,
        "unfiltered_html": true,
        "edit_posts": true,
        "edit_others_posts": true,
        "edit_published_posts": true,
        "publish_posts": true,
        "edit_pages": true,
        "read": true,
        "level_10": true,
        "level_9": true,
        "level_8": true,
        "level_7": true,
        "level_6": true,
        "level_5": true,
        "level_4": true,
        "level_3": true,
        "level_2": true,
        "level_1": true,
        "level_0": true,
        "edit_others_pages": true,
        "edit_published_pages": true,
        "publish_pages": true,
        "delete_pages": true,
        "delete_others_pages": true,
        "delete_published_pages": true,
        "delete_posts": true,
        "delete_others_posts": true,
        "delete_published_posts": true,
        "delete_private_posts": true,
        "edit_private_posts": true,
        "read_private_posts": true,
        "delete_private_pages": true,
        "edit_private_pages": true,
        "read_private_pages": true,
        "delete_users": true,
        "create_users": true,
        "unfiltered_upload": true,
        "edit_dashboard": true,
        "update_plugins": true,
        "delete_plugins": true,
        "install_plugins": true,
        "update_themes": true,
        "install_themes": true,
        "update_core": true,
        "list_users": true,
        "remove_users": true,
        "promote_users": true,
        "edit_theme_options": true,
        "delete_themes": true,
        "export": true,
        "block_lab_edit_block": true,
        "block_lab_edit_blocks": true,
        "block_lab_edit_others_blocks": true,
        "block_lab_publish_blocks": true,
        "block_lab_read_block": true,
        "block_lab_read_private_blocks": true,
        "block_lab_delete_block": true,
        "administrator": true
      },
      "extra_capabilities": {
        "administrator": true
      },
      "avatar_urls": {
        "24": "http:\/\/2.gravatar.com\/avatar\/eae60811a8ebdc6b8242cdf1542a4ae9?s=24&d=mm&r=g",
        "48": "http:\/\/2.gravatar.com\/avatar\/eae60811a8ebdc6b8242cdf1542a4ae9?s=48&d=mm&r=g",
        "96": "http:\/\/2.gravatar.com\/avatar\/eae60811a8ebdc6b8242cdf1542a4ae9?s=96&d=mm&r=g"
      },
      "meta": [],
      "_links": {
        "self": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/users\/1"
          }
        ],
        "collection": [
          {
            "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/users"
          }
        ]
      }
    },
    "headers": []
  },
  "OPTIONS": {
    "\/wp\/v2\/media": {
      "body": {
        "namespace": "wp\/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "required": false,
                "default": "view",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                "type": "string"
              },
              "page": {
                "required": false,
                "default": 1,
                "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                "type": "integer"
              },
              "per_page": {
                "required": false,
                "default": 10,
                "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                "type": "integer"
              },
              "search": {
                "required": false,
                "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                "type": "string"
              },
              "after": {
                "required": false,
                "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u540e\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                "type": "string"
              },
              "author": {
                "required": false,
                "default": [],
                "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6307\u5b9a\u7ed9\u7279\u5b9a\u4f5c\u8005\u7684\u6587\u7ae0\u3002",
                "type": "array",
                "items": {
                  "type": "integer"
                }
              },
              "author_exclude": {
                "required": false,
                "default": [],
                "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9a\u7ed9\u7279\u5b9a\u4f5c\u8005\u7684\u6587\u7ae0\u3002",
                "type": "array",
                "items": {
                  "type": "integer"
                }
              },
              "before": {
                "required": false,
                "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u524d\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                "type": "string"
              },
              "exclude": {
                "required": false,
                "default": [],
                "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                "type": "array",
                "items": {
                  "type": "integer"
                }
              },
              "include": {
                "required": false,
                "default": [],
                "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                "type": "array",
                "items": {
                  "type": "integer"
                }
              },
              "offset": {
                "required": false,
                "description": "\u5c06\u7ed3\u679c\u96c6\u79fb\u4f4d\u7279\u5b9a\u6570\u91cf\u3002",
                "type": "integer"
              },
              "order": {
                "required": false,
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                "type": "string"
              },
              "orderby": {
                "required": false,
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "description": "\u6309\u5bf9\u8c61\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                "type": "string"
              },
              "parent": {
                "required": false,
                "default": [],
                "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u4e00\u4e9b\u7279\u5b9a\u7236ID\u7684\u9879\u76ee\u3002",
                "type": "array",
                "items": {
                  "type": "integer"
                }
              },
              "parent_exclude": {
                "required": false,
                "default": [],
                "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6ca1\u6709\u7279\u5b9a\u7236ID\u7684\u6587\u7ae0\u3002",
                "type": "array",
                "items": {
                  "type": "integer"
                }
              },
              "slug": {
                "required": false,
                "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u7279\u5b9a\u522b\u540d\u7684\u6587\u7ae0\u3002",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "status": {
                "required": false,
                "default": "inherit",
                "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u72b6\u6001\u7684\u6587\u7ae0\u3002",
                "type": "array",
                "items": {
                  "enum": [
                    "inherit",
                    "private",
                    "trash"
                  ],
                  "type": "string"
                }
              },
              "media_type": {
                "required": false,
                "enum": [
                  "image",
                  "video",
                  "text",
                  "application",
                  "audio"
                ],
                "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u67d0\u4e00\u5a92\u4f53\u7c7b\u578b\u7684\u9644\u4ef6\u3002",
                "type": "string"
              },
              "mime_type": {
                "required": false,
                "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u67d0\u4e00MIME\u7c7b\u578b\u7684\u9644\u4ef6\u3002",
                "type": "string"
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "date": {
                "required": false,
                "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                "type": "string"
              },
              "date_gmt": {
                "required": false,
                "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                "type": "string"
              },
              "slug": {
                "required": false,
                "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                "type": "string"
              },
              "status": {
                "required": false,
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private"
                ],
                "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                "type": "string"
              },
              "title": {
                "required": false,
                "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                "type": "object"
              },
              "author": {
                "required": false,
                "description": "\u5bf9\u8c61\u4f5c\u8005\u7684ID\u3002",
                "type": "integer"
              },
              "comment_status": {
                "required": false,
                "enum": [
                  "open",
                  "closed"
                ],
                "description": "\u5bf9\u8c61\u662f\u5426\u5f00\u653e\u8bc4\u8bba\u3002",
                "type": "string"
              },
              "ping_status": {
                "required": false,
                "enum": [
                  "open",
                  "closed"
                ],
                "description": "\u5bf9\u8c61\u662f\u5426\u63a5\u53d7ping\u3002",
                "type": "string"
              },
              "meta": {
                "required": false,
                "description": "\u5143\u5b57\u6bb5\u3002",
                "type": "object"
              },
              "template": {
                "required": false,
                "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                "type": "string"
              },
              "alt_text": {
                "required": false,
                "description": "\u5728\u9644\u4ef6\u672a\u80fd\u663e\u793a\u65f6\u663e\u793a\u7684\u66ff\u6362\u6587\u672c\u3002",
                "type": "string"
              },
              "caption": {
                "required": false,
                "description": "\u9644\u4ef6\u8bf4\u660e\u3002",
                "type": "object"
              },
              "description": {
                "required": false,
                "description": "\u9644\u4ef6\u7684\u63cf\u8ff0\u3002",
                "type": "object"
              },
              "post": {
                "required": false,
                "description": "\u9644\u4ef6\u6240\u5c5e\u6587\u7ae0\u7684ID\u3002",
                "type": "integer"
              }
            }
          }
        ],
        "schema": {
          "$schema": "http:\/\/json-schema.org\/draft-04\/schema#",
          "title": "attachment",
          "type": "object",
          "properties": {
            "date": {
              "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
              "type": "string",
              "format": "date-time",
              "context": [
                "view",
                "edit",
                "embed"
              ]
            },
            "date_gmt": {
              "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
              "type": "string",
              "format": "date-time",
              "context": [
                "view",
                "edit"
              ]
            },
            "guid": {
              "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
              "type": "object",
              "context": [
                "view",
                "edit"
              ],
              "readonly": true,
              "properties": {
                "raw": {
                  "description": "\u5bf9\u8c61\u7684GUID\uff0c\u5b58\u653e\u4e8e\u6570\u636e\u5e93\u3002",
                  "type": "string",
                  "context": [
                    "edit"
                  ],
                  "readonly": true
                },
                "rendered": {
                  "description": "\u5bf9\u8c61\u7684GUID\uff0c\u4e3a\u4e86\u663e\u793a\u4f5c\u8f6c\u6362\u3002",
                  "type": "string",
                  "context": [
                    "view",
                    "edit"
                  ],
                  "readonly": true
                }
              }
            },
            "id": {
              "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
              "type": "integer",
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "readonly": true
            },
            "link": {
              "description": "\u5bf9\u8c61\u7684URL\u3002",
              "type": "string",
              "format": "uri",
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "readonly": true
            },
            "modified": {
              "description": "\u5bf9\u8c61\u7684\u4e0a\u6b21\u4fee\u6539\u65e5\u671f\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
              "type": "string",
              "format": "date-time",
              "context": [
                "view",
                "edit"
              ],
              "readonly": true
            },
            "modified_gmt": {
              "description": "\u5bf9\u8c61\u7684\u4e0a\u6b21\u4fee\u6539\u65e5\u671f\uff0cGMT\u3002",
              "type": "string",
              "format": "date-time",
              "context": [
                "view",
                "edit"
              ],
              "readonly": true
            },
            "slug": {
              "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
              "type": "string",
              "context": [
                "view",
                "edit",
                "embed"
              ]
            },
            "status": {
              "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
              "type": "string",
              "enum": [
                "publish",
                "future",
                "draft",
                "pending",
                "private"
              ],
              "context": [
                "view",
                "edit"
              ]
            },
            "type": {
              "description": "\u5bf9\u8c61\u7684\u6587\u7ae0\u7c7b\u522b\u3002",
              "type": "string",
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "readonly": true
            },
            "permalink_template": {
              "description": "\u6b64\u5bf9\u8c61\u7684\u6c38\u4e45\u94fe\u63a5\u6a21\u677f\u3002",
              "type": "string",
              "context": [
                "edit"
              ],
              "readonly": true
            },
            "generated_slug": {
              "description": "\u4ece\u5bf9\u8c61\u6807\u9898\u81ea\u52a8\u751f\u6210\u7684\u522b\u540d\u3002",
              "type": "string",
              "context": [
                "edit"
              ],
              "readonly": true
            },
            "title": {
              "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
              "type": "object",
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "properties": {
                "raw": {
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\uff0c\u5b58\u653e\u4e8e\u6570\u636e\u5e93\u3002",
                  "type": "string",
                  "context": [
                    "edit"
                  ]
                },
                "rendered": {
                  "description": "\u5bf9\u8c61\u7684HTML\u6807\u9898\uff0c\u4e3a\u4e86\u663e\u793a\u4f5c\u8f6c\u6362\u3002",
                  "type": "string",
                  "context": [
                    "view",
                    "edit",
                    "embed"
                  ],
                  "readonly": true
                }
              }
            },
            "author": {
              "description": "\u5bf9\u8c61\u4f5c\u8005\u7684ID\u3002",
              "type": "integer",
              "context": [
                "view",
                "edit",
                "embed"
              ]
            },
            "comment_status": {
              "description": "\u5bf9\u8c61\u662f\u5426\u5f00\u653e\u8bc4\u8bba\u3002",
              "type": "string",
              "enum": [
                "open",
                "closed"
              ],
              "context": [
                "view",
                "edit"
              ]
            },
            "ping_status": {
              "description": "\u5bf9\u8c61\u662f\u5426\u63a5\u53d7ping\u3002",
              "type": "string",
              "enum": [
                "open",
                "closed"
              ],
              "context": [
                "view",
                "edit"
              ]
            },
            "meta": {
              "description": "\u5143\u5b57\u6bb5\u3002",
              "type": "object",
              "context": [
                "view",
                "edit"
              ],
              "properties": []
            },
            "template": {
              "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
              "type": "string",
              "context": [
                "view",
                "edit"
              ]
            },
            "alt_text": {
              "description": "\u5728\u9644\u4ef6\u672a\u80fd\u663e\u793a\u65f6\u663e\u793a\u7684\u66ff\u6362\u6587\u672c\u3002",
              "type": "string",
              "context": [
                "view",
                "edit",
                "embed"
              ]
            },
            "caption": {
              "description": "\u9644\u4ef6\u8bf4\u660e\u3002",
              "type": "object",
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "properties": {
                "raw": {
                  "description": "\u9644\u4ef6\u7684\u8bf4\u660e\uff0c\u5b58\u653e\u4e8e\u6570\u636e\u5e93\u3002",
                  "type": "string",
                  "context": [
                    "edit"
                  ]
                },
                "rendered": {
                  "description": "\u9644\u4ef6\u7684HTML\u8bf4\u660e\uff0c\u4e3a\u4e86\u663e\u793a\u4f5c\u8f6c\u6362\u3002",
                  "type": "string",
                  "context": [
                    "view",
                    "edit",
                    "embed"
                  ],
                  "readonly": true
                }
              }
            },
            "description": {
              "description": "\u9644\u4ef6\u7684\u63cf\u8ff0\u3002",
              "type": "object",
              "context": [
                "view",
                "edit"
              ],
              "properties": {
                "raw": {
                  "description": "\u5bf9\u8c61\u7684\u63cf\u8ff0\uff0c\u5b58\u653e\u4e8e\u6570\u636e\u5e93\u3002",
                  "type": "string",
                  "context": [
                    "edit"
                  ]
                },
                "rendered": {
                  "description": "\u5bf9\u8c61\u7684HTML\u63cf\u8ff0\uff0c\u4e3a\u4e86\u663e\u793a\u4f5c\u8f6c\u6362\u3002",
                  "type": "string",
                  "context": [
                    "view",
                    "edit"
                  ],
                  "readonly": true
                }
              }
            },
            "media_type": {
              "description": "\u9644\u4ef6\u7c7b\u578b\u3002",
              "type": "string",
              "enum": [
                "image",
                "file"
              ],
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "readonly": true
            },
            "mime_type": {
              "description": "\u9644\u4ef6\u7684MIME\u7c7b\u578b\u3002",
              "type": "string",
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "readonly": true
            },
            "media_details": {
              "description": "\u5a92\u4f53\u6587\u4ef6\u5177\u4f53\u5230\u7c7b\u578b\u7684\u8be6\u60c5\u3002",
              "type": "object",
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "readonly": true
            },
            "post": {
              "description": "\u9644\u4ef6\u6240\u5c5e\u6587\u7ae0\u7684ID\u3002",
              "type": "integer",
              "context": [
                "view",
                "edit"
              ]
            },
            "source_url": {
              "description": "\u539f\u59cb\u9644\u4ef6\u6587\u4ef6\u7684URL\u3002",
              "type": "string",
              "format": "uri",
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "readonly": true
            }
          },
          "links": [
            {
              "rel": "https:\/\/api.w.org\/action-unfiltered-html",
              "title": "\u5f53\u524d\u7528\u6237\u53ef\u4ee5\u53d1\u5e03\u672a\u8fc7\u6ee4\u7684HTML\u6807\u8bb0\u548cJavaScript\u3002",
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/media\/{id}",
              "targetSchema": {
                "type": "object",
                "properties": {
                  "content": {
                    "raw": {
                      "type": "string"
                    }
                  }
                }
              }
            },
            {
              "rel": "https:\/\/api.w.org\/action-assign-author",
              "title": "\u5f53\u524d\u7528\u6237\u53ef\u4ee5\u66f4\u6539\u6b64\u6587\u7ae0\u7684\u4f5c\u8005\u3002",
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/media\/{id}",
              "targetSchema": {
                "type": "object",
                "properties": {
                  "author": {
                    "type": "integer"
                  }
                }
              }
            }
          ]
        },
        "_links": {
          "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/media"
        }
      },
      "headers": {
        "Allow": "GET, POST"
      }
    },
    "\/wp\/v2\/blocks": {
      "body": {
        "namespace": "wp\/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "required": false,
                "default": "view",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "description": "\u8bf7\u6c42\u63d0\u51fa\u7684\u8303\u56f4\uff0c\u7528\u4e8e\u51b3\u5b9a\u56de\u5e94\u5305\u542b\u7684\u5b57\u6bb5\u3002",
                "type": "string"
              },
              "page": {
                "required": false,
                "default": 1,
                "description": "\u96c6\u5408\u7684\u5f53\u524d\u9875\u3002",
                "type": "integer"
              },
              "per_page": {
                "required": false,
                "default": 10,
                "description": "\u7ed3\u679c\u96c6\u5305\u542b\u7684\u6700\u5927\u9879\u76ee\u6570\u91cf\u3002",
                "type": "integer"
              },
              "search": {
                "required": false,
                "description": "\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u3002",
                "type": "string"
              },
              "after": {
                "required": false,
                "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u540e\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                "type": "string"
              },
              "before": {
                "required": false,
                "description": "\u5c06\u56de\u5e94\u9650\u5236\u5728\u4e00\u4e2a\u7ed9\u5b9a\u7684ISO8601\u517c\u5bb9\u65e5\u671f\u4e4b\u524d\u53d1\u5e03\u7684\u6587\u7ae0\u3002",
                "type": "string"
              },
              "exclude": {
                "required": false,
                "default": [],
                "description": "\u786e\u4fdd\u7ed3\u679c\u96c6\u6392\u9664\u6307\u5b9aID\u3002",
                "type": "array",
                "items": {
                  "type": "integer"
                }
              },
              "include": {
                "required": false,
                "default": [],
                "description": "\u5c06\u7ed3\u679c\u96c6\u9650\u5236\u5230\u6307\u5b9aID\u3002",
                "type": "array",
                "items": {
                  "type": "integer"
                }
              },
              "offset": {
                "required": false,
                "description": "\u5c06\u7ed3\u679c\u96c6\u79fb\u4f4d\u7279\u5b9a\u6570\u91cf\u3002",
                "type": "integer"
              },
              "order": {
                "required": false,
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "description": "\u8bbe\u7f6e\u6392\u5e8f\u5b57\u6bb5\u5347\u5e8f\u6216\u964d\u5e8f\u3002",
                "type": "string"
              },
              "orderby": {
                "required": false,
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "description": "\u6309\u5bf9\u8c61\u5c5e\u6027\u6392\u5e8f\u96c6\u5408\u3002",
                "type": "string"
              },
              "slug": {
                "required": false,
                "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u7279\u5b9a\u522b\u540d\u7684\u6587\u7ae0\u3002",
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "status": {
                "required": false,
                "default": "publish",
                "description": "\u9650\u5236\u7ed3\u679c\u96c6\u4e3a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u72b6\u6001\u7684\u6587\u7ae0\u3002",
                "type": "array",
                "items": {
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private",
                    "trash",
                    "auto-draft",
                    "inherit",
                    "request-pending",
                    "request-confirmed",
                    "request-failed",
                    "request-completed",
                    "any"
                  ],
                  "type": "string"
                }
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "date": {
                "required": false,
                "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
                "type": "string"
              },
              "date_gmt": {
                "required": false,
                "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
                "type": "string"
              },
              "slug": {
                "required": false,
                "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
                "type": "string"
              },
              "status": {
                "required": false,
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private"
                ],
                "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
                "type": "string"
              },
              "password": {
                "required": false,
                "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
                "type": "string"
              },
              "title": {
                "required": false,
                "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
                "type": "object"
              },
              "content": {
                "required": false,
                "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
                "type": "object"
              },
              "template": {
                "required": false,
                "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
                "type": "string"
              }
            }
          }
        ],
        "schema": {
          "$schema": "http:\/\/json-schema.org\/draft-04\/schema#",
          "title": "wp_block",
          "type": "object",
          "properties": {
            "date": {
              "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
              "type": "string",
              "format": "date-time",
              "context": [
                "view",
                "edit",
                "embed"
              ]
            },
            "date_gmt": {
              "description": "\u5bf9\u8c61\u7684\u53d1\u5e03\u65f6\u95f4\uff0cGMT\u3002",
              "type": "string",
              "format": "date-time",
              "context": [
                "view",
                "edit"
              ]
            },
            "guid": {
              "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
              "type": "object",
              "context": [
                "view",
                "edit"
              ],
              "readonly": true,
              "properties": {
                "raw": {
                  "description": "\u5bf9\u8c61\u7684GUID\uff0c\u5b58\u653e\u4e8e\u6570\u636e\u5e93\u3002",
                  "type": "string",
                  "context": [
                    "edit"
                  ],
                  "readonly": true
                },
                "rendered": {
                  "description": "\u5bf9\u8c61\u7684GUID\uff0c\u4e3a\u4e86\u663e\u793a\u4f5c\u8f6c\u6362\u3002",
                  "type": "string",
                  "context": [
                    "view",
                    "edit"
                  ],
                  "readonly": true
                }
              }
            },
            "id": {
              "description": "\u5bf9\u8c61\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002",
              "type": "integer",
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "readonly": true
            },
            "link": {
              "description": "\u5bf9\u8c61\u7684URL\u3002",
              "type": "string",
              "format": "uri",
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "readonly": true
            },
            "modified": {
              "description": "\u5bf9\u8c61\u7684\u4e0a\u6b21\u4fee\u6539\u65e5\u671f\uff0c\u7ad9\u70b9\u65f6\u533a\u3002",
              "type": "string",
              "format": "date-time",
              "context": [
                "view",
                "edit"
              ],
              "readonly": true
            },
            "modified_gmt": {
              "description": "\u5bf9\u8c61\u7684\u4e0a\u6b21\u4fee\u6539\u65e5\u671f\uff0cGMT\u3002",
              "type": "string",
              "format": "date-time",
              "context": [
                "view",
                "edit"
              ],
              "readonly": true
            },
            "slug": {
              "description": "\u5bf9\u8c61\u7c7b\u522b\u800c\u8a00\u7684\u82f1\u6570\u5b57\u6807\u8bc6\u7b26\u3002",
              "type": "string",
              "context": [
                "view",
                "edit",
                "embed"
              ]
            },
            "status": {
              "description": "\u5bf9\u8c61\u7684\u547d\u540d\u72b6\u6001\u3002",
              "type": "string",
              "enum": [
                "publish",
                "future",
                "draft",
                "pending",
                "private"
              ],
              "context": [
                "view",
                "edit"
              ]
            },
            "type": {
              "description": "\u5bf9\u8c61\u7684\u6587\u7ae0\u7c7b\u522b\u3002",
              "type": "string",
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "readonly": true
            },
            "password": {
              "description": "\u7528\u6765\u4fdd\u62a4\u5185\u5bb9\u548c\u6458\u8981\u7684\u5bc6\u7801\u3002",
              "type": "string",
              "context": [
                "edit"
              ]
            },
            "title": {
              "description": "\u5bf9\u8c61\u7684\u6807\u9898\u3002",
              "type": "object",
              "context": [
                "view",
                "edit",
                "embed"
              ],
              "properties": {
                "raw": {
                  "description": "\u5bf9\u8c61\u7684\u6807\u9898\uff0c\u5b58\u653e\u4e8e\u6570\u636e\u5e93\u3002",
                  "type": "string",
                  "context": [
                    "view",
                    "edit"
                  ]
                }
              }
            },
            "content": {
              "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\u3002",
              "type": "object",
              "context": [
                "view",
                "edit"
              ],
              "properties": {
                "raw": {
                  "description": "\u5bf9\u8c61\u7684\u5185\u5bb9\uff0c\u5b58\u5728\u4e8e\u6570\u636e\u5e93\u3002",
                  "type": "string",
                  "context": [
                    "view",
                    "edit"
                  ]
                },
                "block_version": {
                  "description": "\u5bf9\u8c61\u4f7f\u7528\u7684\u5185\u5bb9\u533a\u5757\u683c\u5f0f\u7684\u7248\u672c\u3002",
                  "type": "integer",
                  "context": [
                    "edit"
                  ],
                  "readonly": true
                },
                "protected": {
                  "description": "\u5185\u5bb9\u662f\u5426\u53d7\u5230\u5bc6\u7801\u4fdd\u62a4\u3002",
                  "type": "boolean",
                  "context": [
                    "view",
                    "edit",
                    "embed"
                  ],
                  "readonly": true
                }
              }
            },
            "template": {
              "description": "\u7528\u6765\u663e\u793a\u6b64\u5bf9\u8c61\u7684\u4e3b\u9898\u6587\u4ef6\u3002",
              "type": "string",
              "context": [
                "view",
                "edit"
              ]
            }
          },
          "links": [
            {
              "rel": "https:\/\/api.w.org\/action-publish",
              "title": "\u5f53\u524d\u7528\u6237\u53ef\u4ee5\u53d1\u5e03\u6b64\u6587\u7ae0\u3002",
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/blocks\/{id}",
              "targetSchema": {
                "type": "object",
                "properties": {
                  "status": {
                    "type": "string",
                    "enum": [
                      "publish",
                      "future"
                    ]
                  }
                }
              }
            },
            {
              "rel": "https:\/\/api.w.org\/action-unfiltered-html",
              "title": "\u5f53\u524d\u7528\u6237\u53ef\u4ee5\u53d1\u5e03\u672a\u8fc7\u6ee4\u7684HTML\u6807\u8bb0\u548cJavaScript\u3002",
              "href": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/blocks\/{id}",
              "targetSchema": {
                "type": "object",
                "properties": {
                  "content": {
                    "raw": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          ]
        },
        "_links": {
          "self": "http:\/\/wp.preferr.ilovelook.cn\/wp-json\/wp\/v2\/blocks"
        }
      },
      "headers": {
        "Allow": "GET, POST"
      }
    }
  },
  "\/wp\/v2\/posts\/28\/autosaves?context=edit": {
    "body": [],
    "headers": []
  }
};
