#################
# S3 resources
#################

resource "aws_s3_bucket" "movieapp_s3_bucket" {
  bucket        = local.prefix
  acl           = "public-read"
  force_destroy = true

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::${local.prefix}/*",
      "Principal": "*"
    }
  ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
  versioning {
    enabled = true
  }

  tags = local.common_tags
}
