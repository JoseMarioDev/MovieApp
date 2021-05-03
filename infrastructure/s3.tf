#################
# S3 resources
#################
data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.movieapp_s3_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "movieapp_s3_bucket" {
  bucket = aws_s3_bucket.movieapp_s3_bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}
resource "aws_s3_bucket" "movieapp_s3_bucket" {
  bucket        = local.prefix
  acl           = "private"
  force_destroy = true

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
  versioning {
    enabled = true
  }

  tags = local.common_tags
}
