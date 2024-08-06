ALTER TABLE "options" DROP CONSTRAINT "options_question_id_questions_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "options" ADD CONSTRAINT "options_id_questions_id_fk" FOREIGN KEY ("id") REFERENCES "public"."questions"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "options" DROP COLUMN IF EXISTS "question_id";--> statement-breakpoint
ALTER TABLE "questions" DROP COLUMN IF EXISTS "options";